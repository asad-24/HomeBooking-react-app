

import "./input.css";
const InputBox = () => {
  return (
    <div>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main-box">
              <p className="person-text ">Adult</p>
              <input
                value={"4"}
                type="texet"
                name=""
                id=""
                className="n0OfAdult text-center"
              />
            </div>
            <div className="main-box mt-3">
              <div className="child-box">
                <p className="me-4 child-text">Children</p>
                <p className="child-year">0-12 year</p>
              </div>
              <input
                value={"6"}
                type="texet"
                name=""
                id=""
                className="n0OfAdult text-center"
              />
            </div>
            <div className="main-box mt-5 ">
              <p className="person-text ">Additional Cleaning</p>
              <div className="n0OfAdult text-center">
                {" "}
                <input
                  type="checkBox"
                  name=""
                  id=""
                  className="checkBoxes text-center"
                />
              </div>
            </div>
            <div className="main-box mt-3 ">
              <p className="person-text ">Pets</p>
              <div className="n0OfAdult text-center">
                {" "}
                <input
                  type="checkBox"
                  name=""
                  id=""
                  className="checkBoxes text-center"
                />
              </div>
            </div>
            <div className="main-box mt-3 ">
              <p className="person-text ">Hire Infant equipment</p>
              <div className="n0OfAdult text-center">
                {" "}
                <input
                  type="checkBox"
                  name=""
                  id=""
                  className="checkBoxes text-center"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end">
           
              <div>
                Check In <br />{" "}
                <span className="mx-2 text-secondary check-font">Friday 22 June</span>{" "}
                <br />
                <span className="text-secondary mx-2 check-font">2pm</span>
              </div>

              <div>
                Check Out <br />{" "}
                <span className="mx-2 text-secondary check-font">Monday 25 June</span>{" "}
                <br />
                <span className="text-secondary mx-2 check-font">10am</span>
              </div>
            </div>
          </div>
          <div className="row ">
                    <div className="col-lg-6 col-md-6 col-12   d-flex ms-auto">
                        <button className='btn btn-outline-secondary booking-btn ms-auto'>Continue Booking</button>
                    </div>
                </div>
        </div>
     
    </div>
  );
};

export default InputBox;
