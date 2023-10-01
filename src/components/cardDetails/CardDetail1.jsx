
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
   
   <div className="container-fluid" >
    <Header/>
    <Photos/>
    <Rating/>
    <Details/>
    <div className="row my-5 calander_container">
      <div className="col-lg-6">
      <Calendar/>
 
      </div>
      <div className="col-lg-6">
          <InputBox/>
      </div>
    </div>
    <div className="row my-5 p-3">
      <div className="col-lg-5">
      <ProgressT/>
 
      </div>
      <div className="col-lg-7">
        <Reviewe/>
      </div>
    </div>

    <Footer/>

 
   </div>
     
    
  
  );
}

export default CardDetail;
