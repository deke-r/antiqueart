export default function HeroSection() {
  return (
    <section className="py-5 hero-section">
      <div className="container">
        <div className="row mx-md-5 my-md-5 align-items-center min-vh-50">
          <div className="col-lg-6 col-md-8">
            <div
              className="hero-content rounded-5 p-5"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.7)" }} // Dark overlay
            >
              <h3 className="text-light mb-3 fw-normal">Timeless Interior Solutions</h3>
              <h1 className="display-4 fw-bold mb-4 text-light">
                Designing Spaces<br />
                That Define Your Style
              </h1>
              <p className="lead mb-4 f_20 text-light">
                Discover elegant furniture, creative interiors, and custom decor ideas to elevate your home or workspace.
              </p>
              <button className="btn btn-light box_sdw rounded-4 border-0 px-4 py-3 text-uppercase text-dark">
                Explore Collections
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            {/* You can insert an interior design-related hero image here */}
          </div>
        </div>
      </div>
    </section>
  )
}
