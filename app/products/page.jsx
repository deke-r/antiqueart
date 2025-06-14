"use client"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductsPage() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [selectedCategory])

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories")
      setCategories(res.data)
    } catch (err) {
      console.error("Error fetching categories", err)
    }
  }

  const fetchProducts = async () => {
    try {
      const categoryId = selectedCategory === "all" ? "" : selectedCategory
      const res = await axios.get(`/api/products?category=${categoryId}`)
      setProducts(res.data)
    } catch (err) {
      console.error("Error fetching products", err)
    }
  }

  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return priceMatch
  })

  return (
    <div className="min-vh-100">
      <main className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="position-sticky" style={{ top: "20px" }}>
                <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold mb-3">Categories</h5>
                  <div className="list-group list-group-flush">
                    <button
                      className={`list-group-item list-group-item-action border-0 ${selectedCategory === "all" ? "active" : ""}`}
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Products
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`list-group-item list-group-item-action border-0 ${selectedCategory == cat.id ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat.id)}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold mb-3">Price Range</h5>
                  <div className="mb-3">
                    <label className="form-label">Min Price: ₹{priceRange[0]}</label>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Max Price: ₹{priceRange[1]}</label>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-9 col-md-8">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold" style={{ color: "#150e4b" }}>
                  Products ({filteredProducts.length})
                </h2>
              </div>

              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border-0 shadow-sm h-100 product-card">
                      <img
                        src={`${product.cover_image || "placeholder.svg"}`}
                        alt={product.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body text-center">
                        <h6 className="card-title">{product.name}</h6>
                        <div className="mb-2">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${i < Math.floor(product.rating || 0) ? "text-warning" : "text-muted"}`}
                            ></i>
                          ))}
                          <span className="ms-1 small text-muted">({product.rating || 0})</span>
                        </div>
                        <p className="card-text fw-bold text-primary mb-3">₹{parseFloat(product.price).toFixed(2)}</p>
                        <button className="btn btn-outline-primary btn-sm w-100">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
