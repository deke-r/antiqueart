"use client"

import {
  Sofa,
  Ruler,
  LampDesk,
  Wallpaper,
} from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: <Sofa size={48} />,
      title: "Furniture Design",
      description:
        "Custom furniture crafted to match your taste and space. Comfort meets elegance with premium materials and style.",
    },
    {
      icon: <Ruler size={48} />,
      title: "Space Planning",
      description:
        "Smart interior layouts for optimized space utility. From homes to offices, we help you make every square foot count.",
    },
    {
      icon: <LampDesk size={48} />,
      title: "Lighting Solutions",
      description:
        "Create ambience with modern and classic lighting ideas tailored to suit your interiors beautifully.",
    },
    {
      icon: <Wallpaper size={48} />,
      title: "Wall Styling",
      description:
        "From textured paints to statement wallpapers, we give your walls the personality they deserve.",
    },
  ]

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container py-md-5">
        <div className="text-center mb-5">
          <h2 className="fw-semibold mb-3 f_42">
            We Don't Just Design Spaces.
            <br /> We Transform Experiences.
          </h2>
          <p className="text-muted f_16 my-3">
            Discover our curated services tailored to redefine your living or working space.
            <br /> Functional, aesthetic, and deeply personalized.
          </p>
        </div>
        <div className="row mx-lg-5 g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="bg-white rounded-4 py-5 px-4 h-100 text-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-3 d-flex justify-content-center text-red"
                >
                  {service.icon}
                </motion.div>
                <h5 className="fw-semibold mb-3">{service.title}</h5>
                <p className="text-muted fw-semibold small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
