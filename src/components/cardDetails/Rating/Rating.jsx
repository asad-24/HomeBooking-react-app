import React from 'react'
import "./rating.css"
function Rating() {
  return (
    <div>
       <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-6 info-box ">
            <h1 className="info-box-heading">3 Bauhinia Cres</h1>
            <p className="my-3  text-muted">
             Stunning house two mintue walking from the beach
            </p>
          </div>
          <div className="col-md-6">
           <div className="Rating">
           <div className="rating-text ">
              <p className="sup ">superb</p>
              <p className="rat text-muted">52 rating</p>
            </div>
            <p className="showRating">4.8/5</p>
           </div>
           <div className="Rating">
           <div className="repeat-customer ">
              <p className="me-2">Repeat customers</p>
            </div>
            <p className="showRating">4.8/5</p>
           </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Rating
