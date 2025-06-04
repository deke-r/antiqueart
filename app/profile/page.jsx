"use client"
import { useState } from "react"


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 234 567 8900",
    },
    {
      id: 2,
      type: "Office",
      name: "John Doe",
      address: "456 Business Ave, Suite 200",
      city: "New York",
      state: "NY",
      zip: "10002",
      phone: "+1 234 567 8900",
    },
  ])

  const [showAddressForm, setShowAddressForm] = useState(false)

  return (
    <div className="min-vh-100">
      <main className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="bg-white rounded-3 shadow-sm p-3">
                <div className="text-center mb-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h6 className="mb-0">John Doe</h6>
                  <small className="text-muted">john.doe@example.com</small>
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
                <div className="bg-white rounded-3 shadow-sm p-4">
                  <h5 className="fw-bold mb-4">Profile Details</h5>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" defaultValue="John" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-control" defaultValue="+1 234 567 8900" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-pill px-4">
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
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item text-danger" href="#">
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h6 className="fw-bold">{address.name}</h6>
                          <p className="mb-1">{address.address}</p>
                          <p className="mb-1">
                            {address.city}, {address.state} {address.zip}
                          </p>
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
                          <td>
                            <span className="badge bg-success">Delivered</span>
                          </td>
                          <td>$54.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">View Details</button>
                          </td>
                        </tr>
                        <tr>
                          <td>#12344</td>
                          <td>May 28, 2024</td>
                          <td>
                            <span className="badge bg-warning">Processing</span>
                          </td>
                          <td>$81.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">View Details</button>
                          </td>
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
  )
}
