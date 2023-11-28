import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from 'moment';


const AddPost = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    console.log(user)
    const postedMoment = <p>{moment().format('YYYY-MM-DD | h:mm A')}</p>
    const postTime = postedMoment.props.children
    const handlePost = e => {

        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const tag = form.tag.value;
        const description = form.description.value;
        const name = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;
        const upVote =  0;
        const downVote = 0;
        const time = postTime
       const postInfo = {
            title,tag,description,name,email,photo,upVote,downVote,time
        } 
        console.log(postInfo)
        axiosPublic.post('/post', postInfo)
        .then(res => {
            if (res.data.insertedId) {

                Swal.fire('post added successfully');
                
              }
        })
    }
    
    return (
        <div>
            
            <div>
                <form onSubmit={handlePost}>

                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Post Title*</span>
                                </label>
                        <input name="title" type="text" placeholder="Type here" className="input input-bordered w-full" />

                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Tags*</span>

                            </label>
                            <select defaultValue='default' name="tag" className="select select-bordered w-full">
                                <option disabled value='default'>tag</option>
                                <option value="react">React</option>
                                <option value="html">HTML</option>
                                <option value="node">Node</option>
                                <option value="technology">Technology</option>
                                <option value="photography">Photography</option>
                                <option value="dataScience">Data Science</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description*</span>
                            
                        </label>
                        <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        
                    </div>

                    
                    <input className="btn bg-sky-400 text-white mt-3" value="Post" type="submit" />
                </form>
            </div>
            <Link to="/membership">
            <button className="btn bg-sky-400 text-white mt-3">Become a Member</button>
            </Link>
        </div>
    );
};


export default AddPost;