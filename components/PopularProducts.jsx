import {ShoppingCart} from 'lucide-react'



export default function PopularProducts() {
  const products = [
    { name: "Accessories", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Electronics", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Console Games", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Gardening", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Flowers", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Notebooks", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Baked Goodies", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
    { name: "Teddy Bear", price: "$27.00", image: "/placeholder.svg?height=257&width=300" },
  ]
  

  return (
  <section className="py-5" style={{backgroundColor:'#EEF1F6'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-semibold f_42">Popular Gift Collection</h2>
        </div>
        <div className="row g-4 mx-md-5">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{product.name}</h6>
                  <div className="mb-2">
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <p className="card-text fw-bold text-primary">{product.price}</p>
                  <button className="btn btn-outline-primary w-100 py-2 rounded-0 text-center align-middle border-secondary f_14 fw-semibold text-dark"><ShoppingCart />  Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary rounded-4 fw-semibold py-3 border-0 px-4">View All</button>
        </div>
      </div>
    </section>
  )
}
