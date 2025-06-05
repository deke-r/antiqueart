export default function ProductCategories() {
  const categories = [
    {
      title: "Sofas",
      image: "/img/sofas.jpg",
      description: "Stylish and cozy sofas perfect for any living room setup.",
    },
    {
      title: "Sofa Cum Bed",
      image: "/img/sofa-cum-bed.jpg",
      description: "Dual-purpose sofa cum beds for modern, compact spaces.",
    },
    {
      title: "Beds",
      image: "/img/beds.jpg",
      description: "Comfortable and elegant beds for a restful night's sleep.",
    },
    {
      title: "Dining",
      image: "/img/dining.jpg",
      description: "Dining sets to make every meal a family occasion.",
    },
    {
      title: "Wardrobes",
      image: "/img/wardrobes.jpg",
      description: "Spacious wardrobes designed for style and utility.",
    },
    {
      title: "Shoe Racks",
      image: "/img/shoe-racks.jpg",
      description: "Organize your footwear neatly with stylish shoe racks.",
    },
    {
      title: "Bookshelves",
      image: "/img/bookshelves.jpg",
      description: "Chic bookshelves to display and store your collection.",
    },
    {
      title: "TV Units",
      image: "/img/tv-units.jpg",
      description: "Modern TV units that blend aesthetics with storage.",
    },
    {
      title: "Recliners",
      image: "/img/recliners.jpg",
      description: "Ultimate comfort with our range of stylish recliners.",
    },
    {
      title: "Seating",
      image: "/img/seating.jpg",
      description: "Ottomans, pouffes, and more for flexible seating options.",
    },
    {
      title: "Coffee Tables",
      image: "/img/coffee-tables.jpg",
      description: "Functional and elegant coffee tables for your space.",
    },
    {
      title: "Study",
      image: "/img/study.jpg",
      description: "Study desks and chairs designed for focus and comfort.",
    }

  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container">
        <h2 className="mb-5 fw-semibold text-center f_42">Explore Our Product Categories</h2>
        <div className="row mx-lg-5 g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 shadow-sm position-relative overflow-hidden rounded-3">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-img-overlay d-flex flex-column justify-content-end p-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.7) 100%)",
                  }}
                >
                  <div className="text-white p-3">
                    <h5 className="card-title mb-1">{category.title}</h5>
                    <p className="card-text small mb-0">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
