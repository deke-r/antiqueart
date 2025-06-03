export default function ProductCategories() {
  const categories = [
    {
      title: "Birthday Gift's",
      image: "/placeholder.svg?height=300&width=300",
      description: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Anniversary",
      image: "/placeholder.svg?height=300&width=300",
      description: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Special Gift's",
      image: "/placeholder.svg?height=300&width=300",
      description: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "50% Off",
      image: "/placeholder.svg?height=300&width=300",
      description: "Lorem Ipsum is simply dummy text",
    },
  ]

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container">
        <div className="row mx-lg-5 g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 position-relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
                  <div className="bg-dark bg-opacity-75 text-white p-3">
                    <h5 className="card-title mb-2">{category.title}</h5>
                    <p className="card-text small mb-0">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
