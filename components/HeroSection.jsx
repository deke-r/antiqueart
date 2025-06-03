export default function HeroSection() {
  return (
    <section className="py-5 hero-section">
      <div className="container">
        <div className="row mx-md-5 my-md-5 align-items-center min-vh-50">
          <div className="col-lg-6 col-md-8">
            <div className="hero-content rounded-5 p-5" style={{backgroundColor:"rgba(255, 255, 255, 0.7)"}}>
              <h3 className="text-dark mb-3 fw-normal">The Best Gift Shop</h3>
              <h1 className="display-4 fw-bold mb-4 text-dark">
                Creating Happiness
                <br />
                For Your Loved Ones
              </h1>
              <p className="lead mb-4  f_20 text-muted">
                Browse through some of the largest collection of gifts to brighten your day
              </p>
              <button className="btn btn-primary box_sdw  rounded-4 border-0 px-4 py-3 text-uppercase">Choose A Gift</button>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">{/* Hero image would go here */}</div>
        </div>
      </div>
    </section>
  )
}
