
import "./footer.css"
function Footer() {
  return (
    <div>
       <>
      <div className="container-fluid footer-bg py-4">
        <div className="row d-flex  justify-content-between">
            <div className="col-lg-3 ">
                <h4 className='text-start px-xl-4 mx-xl-4'>3 Bauhania</h4>
                <p className='text-start mx-xl-4 px-xl-4'>Powered By Uniches <br />  Holiday Rental Booking engine</p>
            </div>
            <div className="col-xl-3  d-flex flex-column align-items-end ">
                <button className='btn fw-bold'>Help</button>
                <button className='btn text-secondary'>Owner Login</button>
                <button className='btn  text-secondary'>Contact Owner</button>
                <button className='btn  text-secondary'>Contact Uniche</button>
            </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Footer
