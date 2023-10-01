import  { useState } from 'react';
// import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";

import "./calander.css"
function Calendar1() {
  const [values, setValues] = useState(
   new Date()
  )
  
  const handleDateChange = (newValues) => {
    console.log("Selected Dates:", newValues);
    setValues(newValues);
  };
  const weekDays = [
    ["sun", "S"], //[["name","shortName"], ... ]
    ["mon", "M"],
    ["tue", "T"],
    ["wed", "W"],
    ["thu", "T"],
    ["fri", "F"],
    ["sat", "S"],
  ]

  return (

  <div className='container-fluid  '>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-12 border d-flex justify-content-center align-items-center flex-column">
      <h3 className='text-center'>Availabilty and Booking</h3>
     <div className="responsive-container">
     <Calendar
    value={values}
    onChange={handleDateChange}
    weekDays={weekDays}
    inputClass="custom-input"
    range
    className='calander'
    numberOfMonths={2}
    
  
  />
     </div>
      </div>
    </div>
      </div>
  
  );
    
}
export default Calendar1