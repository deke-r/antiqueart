export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#eef1f6" }}>
      {/* CTA Section */}


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
