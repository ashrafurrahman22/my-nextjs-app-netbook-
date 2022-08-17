import FindApp from "../../Components/FindApp";
import Footer from "../../Components/Footer";
import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import News from "../../Components/News";
import Social from "../../Components/Social";
import Review from "../../Components/Review";
import MainFeatures from "../../Components/MainFeatures";
import ActiveMembers from "../../Components/ActiveMembers";

export default function Main() {
    return (
      <div>
        <Navbar></Navbar>
        <Heading></Heading>
        <Social></Social>
          {/* <Review></Review> */}
        <MainFeatures></MainFeatures>
        <ActiveMembers></ActiveMembers>
        <FindApp></FindApp>
        {/* <News></News> */}
          <Footer></Footer>
      </div>
    )
  }