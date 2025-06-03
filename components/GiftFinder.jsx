export default function GiftFinder() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm rounded-5 py-5 px-4" style={{marginTop:'-10%'}}>
              <div className="row align-items-center">
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                     <img src="/img/default (2).webp" width={50}/>
                    </div>
                    <h5 className="mb-0  f_30 ms-2 mt-1">Need A Gift Now?</h5>
                  </div>
                </div>
                <div className="col-lg-8">
                  <form className="row g-2">
                    <div className="col-md-4">
                      <select className="form-select rounded-4 px-4 py-4">
                        <option>Select destination</option>
                        <option>Destination 1</option>
                        <option>Destination 2</option>
                        <option>Destination 3</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input type="date" className="form-control rounded-4  px-4 py-4" placeholder="Select delivery date" />
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary rounded-4   border-0 px-4 py-4 text-nowrap fw-semibold text-uppercase">Find A Gift Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
