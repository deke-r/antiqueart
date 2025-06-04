"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Electronics",
      price: 27.0,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Accessories",
      price: 27.0,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
  ])

  const updateQuantity = () => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = () => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-vh-100">
      <main className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fw-bold mb-4" style={{ color: "#150e4b" }}>
                Gift Cart
              </h2>

              {cartItems.length > 0 ? (
                <>
                  <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th scope="col" className="border-0">
                              Remove
                            </th>
                            <th scope="col" className="border-0">
                              Image
                            </th>
                            <th scope="col" className="border-0">
                              Product
                            </th>
                            <th scope="col" className="border-0">
                              Price
                            </th>
                            <th scope="col" className="border-0">
                              Quantity
                            </th>
                            <th scope="col" className="border-0">
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <button className="btn btn-sm text-danger" onClick={() => removeItem(item.id)}>
                                  ×
                                </button>
                              </td>
                              <td>
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="rounded"
                                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                />
                              </td>
                              <td>
                                <h6 className="mb-0">{item.name}</h6>
                              </td>
                              <td>
                                <span className="fw-bold">${item.price.toFixed(2)}</span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="mx-3">{item.quantity}</span>
                                  <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>
                                <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="d-flex gap-2">
                          <input type="text" className="form-control" placeholder="Coupon code" />
                          <button className="btn btn-outline-primary">Apply</button>
                        </div>
                      </div>
                      <div className="col-md-6 text-md-end">
                        <button className="btn btn-secondary">Update Cart</button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 ms-auto">
                      <div className="bg-white rounded-3 shadow-sm p-4">
                        <h5 className="fw-bold mb-3">Cart Totals</h5>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Subtotal:</span>
                          <span className="fw-bold">${subtotal.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-3">
                          <span className="fw-bold">Total:</span>
                          <span className="fw-bold">${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary w-100 rounded-pill">Proceed to Checkout</button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-5">
                  <h4>Your cart is empty</h4>
                  <p className="text-muted">Add some products to get started!</p>
                  <button className="btn btn-primary rounded-pill px-4">Continue Shopping</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    
    </div>
  )
}
