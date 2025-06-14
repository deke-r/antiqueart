"use client";
import { useEffect, useState } from "react";

export default function ProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories/userPage")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container">
        <h2 className="mb-5 fw-semibold text-center f_42">Explore Our Product Categories</h2>
        <div className="row mx-lg-5 g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 shadow-sm position-relative overflow-hidden rounded-3">
                <img
                  src={`/uploads/categories/${category.image || "placeholder.svg"}`}
                  alt={category.name}
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
                    <h5 className="card-title mb-1 text-capitalize">{category.name}</h5>
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
