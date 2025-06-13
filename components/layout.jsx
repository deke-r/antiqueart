"use client";

import { Bell, User } from "lucide-react";
import Link from "next/link";
import { useAuth } from '../Context/AuthContext';
import { useState } from "react";

export default function AdminLayout({ children }) {
  const { isLoggedIn, logout } = useAuth();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      logout();
      setShowLogoutConfirm(false);
      setIsLoggingOut(false);
      window.location.href = '/'; // redirect to homepage
    }, 1500);
  };

  const cancelLogout = () => {
    if (!isLoggingOut) {
      setShowLogoutConfirm(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Admin Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top px-3">
        <div className="container-fluid d-flex justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="adminNavbar">
            <ul className="navbar-nav me-auto gap-3">
              <li className="nav-item text-uppercase f_13 fw-semibold">
                <Link className="nav-link" href="/admin/dashboard">Dashboard</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase f_13 fw-semibold" href="#" data-bs-toggle="dropdown">Products</a>
                <ul className="dropdown-menu rounded-0 border-0 shadow-sm">
                  <li><Link className="dropdown-item text-uppercase f_13 fw-semibold" href="/admin/products/add">Add Product</Link></li>
                  <li><Link className="dropdown-item text-uppercase f_13 fw-semibold" href="/admin/products/categories">Categories</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase f_13 fw-semibold" href="#" data-bs-toggle="dropdown">Orders</a>
                <ul className="dropdown-menu rounded-0 border-0 shadow-sm">
                  <li><Link className="dropdown-item text-uppercase f_13 fw-semibold" href="/admin/orders">All Orders</Link></li>
                  <li><Link className="dropdown-item text-uppercase f_13 fw-semibold" href="/admin/orders/pending">Pending Orders</Link></li>
                  <li><Link className="dropdown-item text-uppercase f_13 fw-semibold" href="/admin/orders/completed">Completed Orders</Link></li>
                </ul>
              </li>

              <li className="nav-item text-uppercase f_13 fw-semibold">
                <Link className="nav-link" href="/admin/customers">Customers</Link>
              </li>

              <li className="nav-item text-uppercase f_13 fw-semibold">
                <Link className="nav-link" href="/admin/settings">Settings</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item dropdown">
                <button className="nav-link position-relative" type="button" data-bs-toggle="dropdown">
                  <Bell size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                </button>
                <ul className="dropdown-menu rounded-0 border-0 shadow-sm dropdown-menu-end">
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold" href="#">New Order Received</a></li>
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold" href="#">Product Out of Stock</a></li>
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold" href="#">New Customer Registered</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button className="nav-link d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                    <User size={18} className="text-white" />
                  </div>
                  <span className="d-none d-lg-inline text-uppercase f_13 fw-semibold">Admin</span>
                </button>
                <ul className="dropdown-menu rounded-0 border-0 shadow-sm dropdown-menu-end">
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold" href="#">Profile</a></li>
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-uppercase f_13 fw-semibold pointer" onClick={handleLogoutClick}>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main><div className="container-fluid">{children}</div></main>

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
              <button type="button" className="btn btn-secondary" onClick={cancelLogout} disabled={isLoggingOut}>
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmLogout} disabled={isLoggingOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      {showLogoutConfirm && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
