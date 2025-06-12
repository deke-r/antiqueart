"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

export default function ProfilePage() {
  const router = useRouter();
  const { isLoggedIn, user } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);




  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error fetching profile: ${res.status} - ${text}`);
        }

        const data = await res.json();
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {

      }
    };




    fetchProfile()



  }, [isLoggedIn])





  // useEffect(() => {
  //   const fetchAddresses = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await fetch("/api/addresses", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const data = await res.json();
  //       setAddresses(data || []);
  //     } catch (error) {
  //       console.error("Error fetching addresses", error);
  //     }
  //   };

  //   if (isLoggedIn) {
  //     fetchAddresses();
  //   }
  // }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-vh-100">
      <main className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="bg-white rounded-0 shadow-sm p-3">
                <div className="text-center mb-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h6 className="mb-0">{user?.name || "User"}</h6>
                  <small className="text-muted">{user?.email}</small>
                </div>
                <nav className="nav flex-column">
                  <button
                    className={`nav-link text-start border-0 bg-transparent ${activeTab === "profile" ? "active" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <i className="fas fa-user me-2"></i>Profile Details
                  </button>
                  <button
                    className={`nav-link text-start border-0 bg-transparent ${activeTab === "addresses" ? "active" : ""}`}
                    onClick={() => setActiveTab("addresses")}
                  >
                    <i className="fas fa-map-marker-alt me-2"></i>Addresses
                  </button>
                  <button
                    className={`nav-link text-start border-0 bg-transparent ${activeTab === "orders" ? "active" : ""}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <i className="fas fa-shopping-bag me-2"></i>Orders
                  </button>
                  <button
                    className={`nav-link text-start border-0 bg-transparent ${activeTab === "settings" ? "active" : ""}`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <i className="fas fa-cog me-2"></i>Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {activeTab === "profile" && (
                <div className="bg-white rounded-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-4">Profile Details</h5>
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <input
                          type="text"
                          className="form-control rounded-0 shadow-none auth-input"
                          placeholder="Name"
                          value={userProfile ? userProfile.name : ""}
                          onChange={(e) => e.target.value}
                        />

                      </div>
                    </div>
                    <div className="mb-3">

                      <input type="email" className="form-control rounded-0 shadow-none auth-input" placeholder="Email" value={userProfile ? userProfile.email : ''} onChange={(e) => e.target.value} />
                    </div>
                    <div className="mb-3">
                      <input type="tel" className="form-control rounded-0 shadow-none auth-input" placeholder="Phone" value={userProfile ? userProfile.phone : ''}
                        onChange={(e) => e.target.value} />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-0 w-100 border-0 py-2 px-4">
                      Update Profile
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "addresses" && (
                <div className="bg-white rounded-3 shadow-sm p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">My Addresses</h5>
                    <button className="btn btn-primary rounded-pill" onClick={() => setShowAddressForm(true)}>
                      Add New Address
                    </button>
                  </div>

                  {showAddressForm && (
                    <div className="border rounded-3 p-3 mb-4">
                      <h6 className="fw-bold mb-3">Add New Address</h6>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Address Type</label>
                            <select className="form-select">
                              <option value="Home">Home</option>
                              <option value="Office">Office</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">ZIP Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-control" />
                        </div>
                        <div className="d-flex gap-2">
                          <button type="submit" className="btn btn-primary">
                            Save Address
                          </button>
                          <button type="button" className="btn btn-secondary" onClick={() => setShowAddressForm(false)}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  <div className="row">
                    {addresses.map((address) => (
                      <div key={address.id} className="col-md-6 mb-3">
                        <div className="border rounded-3 p-3">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-primary">{address.type}</span>
                            <div className="dropdown">
                              <button
                                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                Actions
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item text-danger" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                          <h6 className="fw-bold">{address.name}</h6>
                          <p className="mb-1">{address.address}</p>
                          <p className="mb-1">{address.city}, {address.state} {address.zip}</p>
                          <p className="mb-0 text-muted">{address.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="bg-white rounded-3 shadow-sm p-4">
                  <h5 className="fw-bold mb-4">Order History</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#12345</td>
                          <td>June 1, 2024</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                          <td>$54.00</td>
                          <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                        </tr>
                        <tr>
                          <td>#12344</td>
                          <td>May 28, 2024</td>
                          <td><span className="badge bg-warning">Processing</span></td>
                          <td>$81.00</td>
                          <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="bg-white rounded-3 shadow-sm p-4">
                  <h5 className="fw-bold mb-4">Account Settings</h5>
                  <form>
                    <div className="mb-4">
                      <h6 className="fw-bold">Change Password</h6>
                      <div className="mb-3">
                        <label className="form-label">Current Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold">Notifications</h6>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="email-notifications" defaultChecked />
                        <label className="form-check-label" htmlFor="email-notifications">
                          Email notifications
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sms-notifications" />
                        <label className="form-check-label" htmlFor="sms-notifications">
                          SMS notifications
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary rounded-pill px-4">
                      Save Settings
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
