

function Reviewe() {
  return (

    <div className="col-md-12 col-12  me-5 mt-5">
      <div>
        <div className="d-md-flex justify-content-between">
          <div>
            <p className="font-weight-medium fs-base">
              Excellent value for the price!
            </p>
            <p className="text-sm text-muted">John D.</p>
            <p className="pt-1">
              We loved our stay at this beach house. We will definitely come
              back!
            </p>
          </div>
          <div className="d-flex pt-3 justify-content-end align-items-center gap-2 ">
            <div>
              <h5 className="fs-base">Excellent</h5>
            </div>
            <div>
              
              <button className=" border-2 py-1 w-12 border-dark text-sm  review-rate">
                5
              </button>
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-between mt-5 ">
          <div>
            <p>
              <span className="fw-bold pe-2">+</span> Great Location{' '}
            </p>
            <p>
              <span className="fw-bold pe-2">+</span> Service{' '}
            </p>
            <p>
              <span className="fw-bold pe-2">+</span> Complimentary bottle of
              champagne in the room!{' '}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted pt-md-0 pt-4 mt-5">
              Reviewed on 20
              <br /> September, 2022{' '}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-primary my-4" />
      <div>
        <div className="d-md-flex justify-content-between ">
          <div>
            <p className="font-weight-medium fs-base">
              Great beach house with a view
            </p>
            <p className="text-sm text-muted">Amy S.</p>
            <p className="pt-1">
              Had a room facing the beach and it was amazing. Unfortunately, we
              couldnt extend our stay.
            </p>
          </div>
          <div className="d-flex justify-content-end align-items-center pt-3 gap-2">
            <div>
              <h5 className="fs-base">Great</h5>
            </div>
            <div>
              <button className=" border-2 w-12 py-1 border-dark text-sm review-rate">
                4.8
              </button>
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center mt-2">
          <div>
            <p>
              <span className="fw-bold pe-2">-</span> Noise{' '}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted pt-md-0 pt-4">
              Reviewed on 10
              <br /> September, 2022{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
 

 
  )
}

export default Reviewe
