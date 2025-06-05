'use client'

import { motion } from "framer-motion"
import { LampDesk, Users, Truck } from 'lucide-react'

const steps = [
  {
    icon: <LampDesk size={40} className="text-primary" />,
    title: "Explore Our Curated Designs and Furniture Collections",
    description:
      "Browse our exclusive range of modern furniture, decor, and interior themes tailored for your lifestyle and space.",
  },
  {
    icon: <Users size={40} className="text-primary" />,
    title: "Consult with Our Design Experts",
    description:
      "Schedule a free consultation to share your vision. Our experts will help you choose the perfect layout, colors, and materials.",
  },
  {
    icon: <Truck size={40} className="text-primary" />,
    title: "Delivery and Installation at Your Convenience",
    description:
      "Sit back while we deliver and install everything seamlessly. Enjoy your newly transformed space, hassle-free.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container py-5">
        <div className="text-center my-5">
          <h2 className="fw-semibold my-5 f_42">How It Works</h2>
          <p className="text-muted my-4 f_16 fw-semibold">
            From inspiration to installation — we make the entire interior transformation process smooth, guided, and stress-free.
          </p>
        </div>

        <div className="row mx-md-5 my-5 g-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className=" shadow-sm rounded-4 p-md-5 h-100 hv-crd text-start">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">{step.icon}</div>
                  <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center fw-bold" style={{ width: 40, height: 40 }}>
                    {index + 1}
                  </div>
                </div>
                <h5 className="fw-semibold f_18 mb-3">{step.title}</h5>
                <p className="text-muted small f_16">{step.description}</p>
                <button className="btn btn-outline-secondary rounded-3 btn-sm">Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
