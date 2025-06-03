"use client"
import Link from "next/link"


export default function Header() {


  return (
    <header className="" style={{backgroundColor:"white"}}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container-fluid">
            {/* Logo */}
            <Link href="/" className="navbar-brand ms-lg-5">
              <img
                src="/img/image-invert.webp"
                alt="EleGift Logo"
                className="img-fluid"
                style={{ maxHeight: "51px" }}
              />
            </Link>

            {/* Mobile toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar content */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link text-uppercase fw-normal px-3 active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products" className="nav-link text-uppercase fw-normal px-3">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/cart" className="nav-link text-uppercase fw-normal px-3">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/checkout" className="nav-link text-uppercase fw-normal px-3">
                    Checkout
                  </Link>
                </li>
              </ul>

              {/* Sign Up Button */}
              <div className="d-flex justify-content-end me-lg-5">
                <button className="btn sign rounded-4 px-4 py-2 text-uppercase">
                  Sign up Free
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
