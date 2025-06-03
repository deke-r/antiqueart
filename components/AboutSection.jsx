export default function AboutSection() {
  return (

    <>
  
    <section className="py-5 " style={{backgroundColor:'#EEF1F6'}}>
      <div className="container py-md-5">
        <div className="row mx-lg-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-semibold mb-4 f_42">
              What Makes Us
              <br />
              Different?
            </h2>
            <p className="text-muted mb-4 fw-semibold f_16">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="btn btn-primary rounded-4 fw-semibold py-3 border-0 px-4">About Us</button>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="/img/av.jpg" alt="About Us" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
  )
}
