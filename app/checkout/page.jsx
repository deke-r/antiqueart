"use client"
import { useState } from "react"

export default function CheckoutPage() {
  const [showCoupon, setShowCoupon] = useState(false)

  const orderItems = [
    { name: "Console Games", quantity: 1, price: 27.0, image: "/placeholder.svg?height=300&width=300" },
    { name: "Electronics", quantity: 1, price: 27.0, image: "/placeholder.svg?height=300&width=300" },
    { name: "Accessories", quantity: 1, price: 27.0, image: "/placeholder.svg?height=300&width=300" },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-vh-100">
    
      <main className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#150e4b" }}>
            Checkout
          </h2>

          {/* Order Review */}
          <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3">Your Order</h5>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="rounded me-3"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>{item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Subtotal</th>
                    <th></th>
                    <th>${subtotal.toFixed(2)}</th>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <th></th>
                    <th className="text-primary">${subtotal.toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
            <div className="alert alert-info">
              Have a coupon?
              <button className="btn btn-link p-0 ms-1" onClick={() => setShowCoupon(!showCoupon)}>
                Click here to enter your code
              </button>
            </div>
            {showCoupon && (
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Coupon code" />
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            )}
          </div>

          <div className="row">
            {/* Billing Details */}
            <div className="col-lg-6">
              <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Billing Details</h5>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company name (optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country / Region *</label>
                    <select className="form-select" required>
                      <option value="">Select a country / region…</option>
                      <option value="US">United States</option>
                      <option value="BD">Bangladesh</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Street address *</label>
                    <input type="text" className="form-control" placeholder="House number and street name" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Apartment, suite, unit, etc. (optional)" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Town / City *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">State *</label>
                      <select className="form-select" required>
                        <option value="">Select an option…</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Postcode / ZIP</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone *</label>
                    <input type="tel" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address *</label>
                    <input type="email" className="form-control" required />
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Information & Payment */}
            <div className="col-lg-6">
              <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Additional Information</h5>
                <div className="mb-3">
                  <label className="form-label">Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>

              <div className="bg-white rounded-3 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Payment Methods</h5>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="payment" id="bank-transfer" defaultChecked />
                  <label className="form-check-label" htmlFor="bank-transfer">
                    Direct bank transfer
                  </label>
                  <div className="mt-2 text-muted small">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="terms" required />
                  <label className="form-check-label" htmlFor="terms">
                    I have read and agree to the website terms and conditions *
                  </label>
                </div>

                <button className="btn btn-primary w-100 rounded-pill py-3">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
   
    </div>
  )
}
