import FindApp from "../../Components/FindApp";
import Footer from "../../Components/Footer";
import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import Social from "../../Components/Social";
import MainFeatures from "../../Components/MainFeatures";
import ActiveMembers from "../../Components/ActiveMembers";
import LatestNews from "../../Components/LatestNews";
import Reviews from "../../Components/Reviews";

export default function Main() {
    return (
      <div>
        <Navbar></Navbar>
        <Heading></Heading>
        <Social></Social>
          <Reviews></Reviews>
        <MainFeatures></MainFeatures>
        <ActiveMembers></ActiveMembers>
        <FindApp></FindApp>
        <LatestNews></LatestNews>
          <Footer></Footer>
      </div>
    )
  }