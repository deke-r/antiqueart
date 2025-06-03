export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#eef1f6" }}>
      {/* CTA Section */}
      <div className="py-5">
        <div className="container">
          <div className="bg-white rounded-4 p-5 mb-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <h3 className="fw-bold mb-3" style={{ color: "#150e4b" }}>
                  Want More Special Gift Ideas?
                </h3>
                <p className="text-muted mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <button className="btn btn-primary rounded-pill px-4 py-3">Subscribe To Our Newsletter</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <img
                src="/placeholder.svg?height=51&width=164"
                alt="EleGift Logo"
                className="img-fluid"
                style={{ maxHeight: "51px" }}
              />
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
              <p className="mb-0 fw-medium" style={{ color: "#150e4b" }}>
                © Copyright 2020. Powered by WPDeveloper
              </p>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <div className="d-flex justify-content-center justify-content-lg-end gap-2">
                <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
