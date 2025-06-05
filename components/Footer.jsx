'use client'

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

import '../styles/footer.css'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="elegift-footer">
      {/* Newsletter Section */}
      <motion.div
        className="newsletter-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="newsletter-card">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <h3 className="newsletter-title">Want Interior Tips & Offers?</h3>
                <p className="newsletter-text">
                  Subscribe to our newsletter to get exclusive interior design tips, latest furniture trends, and special offers on premium home decor collections.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control newsletter-input"
                      placeholder="Enter your email address"
                    />
                    <button className="btn btn-primary newsletter-btn" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* About Us Column */}
            <motion.div
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="footer-widget">
                <img src="/placeholder.svg?height=51&width=164" alt="Interior Logo" className="footer-logo mb-3" />
                <p className="footer-description">
                  We specialize in crafting modern, elegant furniture and interior solutions that bring comfort and style to your home and workspace.
                </p>
                <div className="footer-social">
                  <h6 className="footer-widget-title">Follow Us</h6>
                  <div className="social-links d-flex gap-2">
                    <a href="#" className="social-link"><Facebook size={20} /></a>
                    <a href="#" className="social-link"><Twitter size={20} /></a>
                    <a href="#" className="social-link"><Instagram size={20} /></a>
                    <a href="#" className="social-link"><Linkedin size={20} /></a>
                    <a href="#" className="social-link"><Youtube size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="col-lg-2 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="footer-widget">
                <h6 className="footer-widget-title">Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/furniture">Furniture</a></li>
                  <li><a href="/interior-design">Interior Design</a></li>
                  <li><a href="/modular-kitchen">Modular Kitchen</a></li>
                  <li><a href="/living-room">Living Room</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="col-lg-2 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="footer-widget">
                <h6 className="footer-widget-title">Our Services</h6>
                <ul className="footer-links">
                  <li><a href="/interior-design">Residential Interiors</a></li>
                  <li><a href="/commercial-design">Commercial Spaces</a></li>
                  <li><a href="/custom-furniture">Custom Furniture</a></li>
                  <li><a href="/renovation">Home Renovation</a></li>
                  <li><a href="/consultation">Design Consultation</a></li>
                </ul>
              </div>
            </motion.div>

            {/* My Account */}
            <motion.div
              className="col-lg-2 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="footer-widget">
                <h6 className="footer-widget-title">My Account</h6>
                <ul className="footer-links">
                  <li><a href="/profile">My Profile</a></li>
                  <li><a href="/orders">Orders</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href="/addresses">Addresses</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="footer-widget">
                <h6 className="footer-widget-title">Contact Us</h6>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-phone contact-icon"></i>
                    <div className="contact-details">
                      <strong>Customer Support</strong><br />
                      +91-9319412021
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    <div className="contact-details">
                      <strong>Showroom</strong><br />
                      17, Block A, Sector 4,<br />
                      Noida, Uttar Pradesh 201301
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope contact-icon"></i>
                    <div className="contact-details">
                      <strong>Email:</strong><br />
                      info@senseproject.in
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
