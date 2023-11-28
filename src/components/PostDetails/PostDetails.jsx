/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const data = useLoaderData()

    const {id} = data || {}
    console.log(id)
    console.log(data)
    return (
        <div>
            {/* <h2>{data.length}</h2> */}
        </div>
    );
};

export default PostDetails;