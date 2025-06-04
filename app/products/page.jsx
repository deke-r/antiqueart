"use client"
import { useState } from "react"


export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = [
    "All Products",
    "Electronics",
    "Accessories",
    "Console Games",
    "Gardening",
    "Flowers",
    "Notebooks",
    "Baked Goodies",
    "Teddy Bears",
  ]

  const products = [
    {
      id: 1,
      name: "Electronics",
      price: 27.0,
      category: "electronics",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Accessories",
      price: 27.0,
      category: "accessories",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Console Games",
      price: 27.0,
      category: "console-games",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Gardening Tools",
      price: 35.0,
      category: "gardening",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Beautiful Flowers",
      price: 22.0,
      category: "flowers",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Premium Notebooks",
      price: 15.0,
      category: "notebooks",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.1,
    },
    {
      id: 7,
      name: "Baked Goodies",
      price: 18.0,
      category: "baked-goodies",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Cute Teddy Bear",
      price: 32.0,
      category: "teddy-bears",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
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
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`list-group-item list-group-item-action border-0 ${
                          selectedCategory === (index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, "-"))
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedCategory(index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, "-"))
                        }
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold mb-3">Price Range</h5>
                  <div className="mb-3">
                    <label className="form-label">Min Price: ${priceRange[0]}</label>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Max Price: ${priceRange[1]}</label>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    />
                  </div>
                  <button className="btn btn-outline-primary btn-sm w-100">Apply Filter</button>
                </div>

                <div className="bg-white rounded-3 shadow-sm p-4">
                  <h5 className="fw-bold mb-3">Featured Products</h5>
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="d-flex align-items-center mb-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="rounded me-3"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="mb-0 small">{product.name}</h6>
                        <span className="text-primary fw-bold">${product.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9 col-md-8">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold" style={{ color: "#150e4b" }}>
                  Products ({filteredProducts.length})
                </h2>
                <div className="d-flex align-items-center gap-3">
                  <span>Sort by:</span>
                  <select className="form-select" style={{ width: "auto" }}>
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>

              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border-0 shadow-sm h-100 product-card">
                      <div className="position-relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="card-img-top"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="position-absolute top-0 end-0 p-2">
                          <button className="btn btn-sm btn-light rounded-circle">
                            <i className="far fa-heart"></i>
                          </button>
                        </div>
                        <div className="product-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                          <button className="btn btn-primary rounded-pill">Quick View</button>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <h6 className="card-title">{product.name}</h6>
                        <div className="mb-2">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${i < Math.floor(product.rating) ? "text-warning" : "text-muted"}`}
                            ></i>
                          ))}
                          <span className="ms-1 small text-muted">({product.rating})</span>
                        </div>
                        <p className="card-text fw-bold text-primary mb-3">${product.price.toFixed(2)}</p>
                        <button className="btn btn-outline-primary btn-sm w-100">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  )
}
