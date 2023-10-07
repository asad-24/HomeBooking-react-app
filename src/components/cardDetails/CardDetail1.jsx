import Photos from "./Photo/Photos";
import Rating from "./Rating/Rating";
import Details from "./Details/Details";
import "./cardDetail.css";
import Calendar from "./calander/Calendar";
import InputBox from "./inputs/InputBox";
import ProgressT from "./reviews/ProgressT";
import Reviewe from "./reviews/Reviewe";
import Footer from "./footer/Footer";
import Header from "./header/Header";
function CardDetail() {
  return (
    <div className="" >
      <Header />
      <Photos />
      <Rating />
      <Details />
      <div className="my-5 calander_container px-3">
        <div className="calander  ">
          <Calendar />
        </div>
        <div className="inputBox">
          <InputBox />
        </div>
      </div>
      <div className= "my-5 progress-container px-3">
        <div className=" ProgressT ">
          <ProgressT />
        </div>
        <div className=" Reviewe">
          <Reviewe />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CardDetail;
