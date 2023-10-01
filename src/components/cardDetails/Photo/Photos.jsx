
import image1 from "../../../assests/2 beds.avif";
import image6 from "../../../assests/bed room 7.avif";
import image7 from "../../../assests/bed room 8.avif";
import image8 from "../../../assests/bed room 9.avif";
import image9 from "../../../assests/bed room1.avif";
import "./photo.css"
function Photos() {
  return (
    <div>
      <div className="container-fluid p-3 ">
        {/* main row */}
        <div className="row main-row">
          <div className="col-lg-6 col-md-6  col-sm-12">
            <img className="img-fluid img-lg" src={image6} alt="" />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* sm img row */}
            <div className="row sm-imgs-row">
              {/* top col-1 */}
              <div className="col-lg-6 col-md-6 col-sm-3 mt-2">
                <img className="img-fluid img-sm" src={image1} alt="" />
              </div>
              {/* bottom col-2 */}
              <div className="col-lg-6 col-md-6  col-sm-3 mt-2">
                <img className="img-fluid img-sm" src={image7} alt="" />
              </div>

              {/* bottom col-3 */}

              <div className="col-lg-6 col-md-6  col-sm-3 mt-2">
                <img className="img-fluid img-sm" src={image8} alt="" />
              </div>

              {/* bottom col-4 */}
              <div className="col-lg-6 col-md-6  col-sm-3 mt-2">
                <img className="img-fluid img-sm" src={image9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
