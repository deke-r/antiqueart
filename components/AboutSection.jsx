'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#EEF1F6' }}>
      <div className="container py-md-5">
        <div className="row mx-lg-5 align-items-center">
          {/* Text Content */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-semibold mb-4 f_42" style={{ lineHeight: 1.2 }}>
              What Makes Us <br /> Different?
            </h2>
            <p className="text-muted mb-4 fw-semibold f_16">
              At Sense Interiors, we blend creativity with functionality to transform your space into a beautiful sanctuary. Our passion lies in crafting bespoke interiors and furniture tailored to your lifestyle and taste.
            </p>

            <ul className="list-unstyled text-muted mb-4" style={{ fontSize: '16px' }}>
              <li className="mb-2">
                <strong>✓ Personalized Designs:</strong> Every project is unique, reflecting your vision and needs.
              </li>
              <li className="mb-2">
                <strong>✓ Quality Craftsmanship:</strong> We use premium materials and skilled artisans to ensure lasting beauty.
              </li>
              <li className="mb-2">
                <strong>✓ Sustainable Practices:</strong> Eco-friendly materials and processes that respect the environment.
              </li>
              <li className="mb-2">
                <strong>✓ Timely Delivery:</strong> We value your time and guarantee on-schedule project completion.
              </li>
            </ul>

            <button className="btn btn-primary rounded-4 fw-semibold py-3 px-5 border-0 shadow-sm">
              Learn More About Us
            </button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="position-relative rounded shadow-lg overflow-hidden">
              <img
                src="/img/5209958.webp"
                alt="About Sense Interiors"
                className="img-fluid"
                style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
