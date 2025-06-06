"use client";
import Link from "next/link";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import SignUpModal from "../components/SignUpModal";
import LogInModal from "../components/LogInModal";

export default function Header() {
  const [isLogin, setIsLogin] = useState(true); // true = show login, false = show signup

  useEffect(() => {
    const dropdown = document.querySelector('.user-dropdown');
    if (dropdown) {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
        dropdown.querySelector('.dropdown-menu')?.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
        dropdown.querySelector('.dropdown-menu')?.classList.remove('show');
      });
    }
  }, []);

  const toggleForm = () => setIsLogin(!isLogin); // Switch form

  return (
    <>
      <header style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container-fluid">
              <Link href="/" className="navbar-brand ms-lg-5">
                <img
                  src="/img/image-invert.webp"
                  alt="EleGift Logo"
                  className="img-fluid"
                  style={{ maxHeight: "51px" }}
                />
              </Link>

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
                  <li className="nav-item dropdown user-dropdown position-relative">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <User />
                    </a>
                    <ul className="dropdown-menu rounded-0 p-0 dropdown-menu-end">
                      <li
                        className="border-bottom pointer p-2 border-1 py-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setIsLogin(true)}
                      >
                        Log In
                      </li>
                      <li
                        className="py-1 p-2 pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setIsLogin(false)}
                      >
                        Sign Up
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {isLogin ? <LogInModal toggleForm={toggleForm} /> : <SignUpModal toggleForm={toggleForm} />}
          </div>
        </div>
      </div>
    </>
  );
}
