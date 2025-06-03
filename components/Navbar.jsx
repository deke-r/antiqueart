"use client";
import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand text-white fw-bold">
          AntiqueArt
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Mega Menu Trigger */}
            <li className="nav-item dropdown position-static">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </span>

              {/* Mega Menu Content */}
              <div className="dropdown-menu mega-menu p-4 mt-0">
                <div className="row">
                  <div className="col-md-4">
                    <h6 className="text-uppercase text-muted">Structures</h6>
                    <Link href="/gate" className="dropdown-item">Gate</Link>
                    <Link href="/railing" className="dropdown-item">Railing</Link>
                    <Link href="/doors" className="dropdown-item">Doors</Link>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-uppercase text-muted">Decor</h6>
                    <Link href="/photo-frame" className="dropdown-item">Photo Frame</Link>
                    <Link href="/mirror" className="dropdown-item">Mirror</Link>
                    <Link href="/home-decor" className="dropdown-item">Home Decor</Link>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-uppercase text-muted">Accessories</h6>
                    <Link href="/light" className="dropdown-item">Light</Link>
                    <Link href="/watch" className="dropdown-item">Watch</Link>
                    <Link href="/pots" className="dropdown-item">Pots</Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Static Links */}
            <li className="nav-item">
              <Link href="/aboutus" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
