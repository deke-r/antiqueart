"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import SignUpModal from "../components/SignUpModal";
import LogInModal from "../components/LogInModal";
import { useAuth } from '../Context/AuthContext';

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { isLoggedIn, logout } = useAuth();

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

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setIsLoggingOut(true);

    setTimeout(() => {
      logout();
      setShowLogoutConfirm(false);
      setIsLoggingOut(false);
      // Reload the whole page to index:
      window.location.href = '/';
    }, 1500); // 1.5 sec delay to simulate loader
  };

  const cancelLogout = () => {
    if (!isLoggingOut) {
      setShowLogoutConfirm(false);
    }
  };

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

                    {!isLoggedIn && (
                
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
                    )}

              
                  {isLoggedIn && (
                    <>
                      <li className="nav-item">
                        <Link href="/profile" className="nav-link text-uppercase fw-normal px-3">
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <button
                          className=" nav-link text-uppercase fw-normal px-3"
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                          onClick={handleLogoutClick}
                          disabled={isLoggingOut}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Login / Signup Modal */}
      <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {isLogin ? <LogInModal toggleForm={toggleForm} /> : <SignUpModal toggleForm={toggleForm} />}
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <div
        className={`modal fade ${showLogoutConfirm ? "show" : ""}`}
        style={{ display: showLogoutConfirm ? "block" : "none" }}
        tabIndex={-1}
        aria-labelledby="logoutConfirmLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logoutConfirmLabel">Confirm Logout</h5>
              <button
                type="button"
                className="btn-close"
                onClick={cancelLogout}
                aria-label="Close"
                disabled={isLoggingOut}
              ></button>
            </div>
            <div className="modal-body">
              {isLoggingOut ? (
                <div className="text-center">
                  <div className="spinner-border text-danger" role="status" />
                  <div>Logging out...</div>
                </div>
              ) : (
                "Are you sure you want to log out?"
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelLogout}
                disabled={isLoggingOut}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmLogout}
                disabled={isLoggingOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      {showLogoutConfirm && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
