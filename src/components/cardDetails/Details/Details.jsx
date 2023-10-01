
import "./detail.css";
import { AiOutlineWifi } from "react-icons/ai";
import { FaFan } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {GiWashingMachine} from 'react-icons/gi'
import {MdPool} from 'react-icons/md'
import {PiTelevisionSimple} from 'react-icons/pi'
import {BsFillKeyFill} from 'react-icons/bs'
import { useState } from "react";
function Details() {
  const [info, setInfo] = useState("Overview");

  const tabContent = {
    Overview: `Experience the scenes coastal retreat of this spacious, pet-friendly vacation home in marcoola Beach's peaceful encalve. Balance style and comfort, it features high celling, timber flood a media room and ducted air conditioning. The outdoor centerpieces is a sparkling pool set within an extension garden.The fully-equipped chef's kitchen facilities entertaining, while five bedrooms across two levels cater to all guests need.other highlights include a full laundry, secure off-streat parking, and proximity to the patrolled to the patrolled beach, making this home a perfect choice for a relaxed family gateway`,
    Area: " A beautiful area often boasts breathtaking landscapes that showcase the wonders of nature. It may include majestic mountains, rolling hills, serene lakes, cascading waterfalls, lush forests, or pristine beaches. These natural features create a picturesque backdrop that appeals to our visual senses.",
    Owner:
      "Ownership is typically defined and recognized by legal systems and frameworks. It confers certain legal rights, such as the right to possess, use, enjoy, lease, sell, or transfer the property or asset.",
    Polices:
      "This policy outlines how an organization collects, stores, uses, and protects sensitive data, including personal and confidential information. It typically complies with data protection regulations such as GDPR, HIPAA, or CCPA.",
    LayOuts:
      "Layouts refer to the arrangement or design of physical spaces, structures, or elements within a specific area. They play a crucial role in architecture, interior design, event planning, and various industries where spatial organization is essential. Here are some key points about layouts:",
    Rooms:
      "Rooms are individual enclosed spaces within a building or structure. They serve specific functions and purposes, such as living, working, sleeping, cooking, or storage.",
  };
  // Function to handle tab click
  const handleTabClick = (tab) => {
    setInfo(tab);
  };
  return (
    <div>
      <div className="container-fluid mainContainer  ">
        <div>
          <div className="row">
            <div className="col-md-12  col-lg-6 col-12">
              <div className="detail-heading">
                <ul className="p-0">
                  {Object.keys(tabContent).map((tab) => (
                    <li
                      key={tab}
                      className={info === tab ? "info active-tab" : ""}
                      onClick={() => handleTabClick(tab)}
                    >
                      {" "}
                      {tab}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="line-"></div>
          <div className="row">
            <div className="col-md-12  col-lg-5 col-12">
              <h3>{info}</h3>
              <div className="tab-content p-2">{tabContent[info]}</div>
              <div></div>
            </div>
            <div className="col-lg-1 vertical-line-col">
            <div className="vertical-line"></div>
            </div>
            <div className="col-md-6  col-lg-3 col-12  ">
              
              <div className="amenities">
                <ul>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <AiOutlineWifi />
                      </h4>
                      Free wifi
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <FaFan />
                      </h4>
                      Air Conditioning
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <FaShower />
                      </h4>
                      Private Bathroom
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <BsFillPersonVcardFill />
                      </h4>
                      Wheelchair Acess
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6  col-lg-3 col-12  ">
              
              <div className="amenities">
                <ul>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <GiWashingMachine />
                      </h4>
                      Washing Machine
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <MdPool />
                      </h4>
                      Pool
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <PiTelevisionSimple />
                      </h4>
                      Television
                    </p>
                  </li>
                  <li>
                    <p className="d-flex align-items-center">
                      {" "}
                      <h4 className="me-4">
                        <BsFillKeyFill />
                      </h4>
                      Keys
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
