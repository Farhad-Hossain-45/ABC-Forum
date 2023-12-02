
// import AllPost from "./AllPost/AllPost";
import Banner from "./Banner/Banner";
import ExtraSection from "./ExtraSection/ExtraSection";
import HomeSection from "./HomeSection/HomeSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <AllPost></AllPost> */}
            <HomeSection></HomeSection>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;