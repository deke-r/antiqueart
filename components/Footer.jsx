import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="elegift-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <h3 className="newsletter-title">Want More Special Gift Ideas?</h3>
                <p className="newsletter-text">
                  Subscribe to our newsletter and get exclusive offers, gift ideas, and updates on new arrivals. Be the
                  first to know about our special promotions and seasonal collections.
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
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* About Us Column */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <img src="/placeholder.svg?height=51&width=164" alt="EleGift Logo" className="footer-logo mb-3" />
                <p className="footer-description">
                  EleGift is your one-stop destination for thoughtful gifts that bring joy to your loved ones. We curate
                  the finest collection of gifts for every occasion and celebration.
                </p>
                <div className="footer-social">
                  <h6 className="footer-widget-title">Follow Us</h6>
                  <div className="social-links">
                    <a href="#" className="social-link facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget">
                <h6 className="footer-widget-title">Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">All Products</a>
                  </li>
                  <li>
                    <a href="/categories/birthday">Birthday Gifts</a>
                  </li>
                  <li>
                    <a href="/categories/anniversary">Anniversary</a>
                  </li>
                  <li>
                    <a href="/categories/special">Special Gifts</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer Service Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget">
                <h6 className="footer-widget-title">Customer Service</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/shipping">Shipping Info</a>
                  </li>
                  <li>
                    <a href="/returns">Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href="/size-guide">Size Guide</a>
                  </li>
                  <li>
                    <a href="/track-order">Track Your Order</a>
                  </li>
                  <li>
                    <a href="/support">Support Center</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* My Account Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget">
                <h6 className="footer-widget-title">My Account</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/profile">My Profile</a>
                  </li>
                  <li>
                    <a href="/orders">Order History</a>
                  </li>
                  <li>
                    <a href="/wishlist">Wishlist</a>
                  </li>
                  <li>
                    <a href="/cart">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="/addresses">My Addresses</a>
                  </li>
                  <li>
                    <a href="/rewards">Rewards Program</a>
                  </li>
                  <li>
                    <a href="/gift-cards">Gift Cards</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h6 className="footer-widget-title">Get In Touch</h6>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    <div className="contact-details">
                      <strong>Address:</strong>
                      <br />
                      123 Gift Street, Suite 456
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone contact-icon"></i>
                    <div className="contact-details">
                      <strong>Phone:</strong>
                      <br />
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope contact-icon"></i>
                    <div className="contact-details">
                      <strong>Email:</strong>
                      <br />
                      info@elegift.com
                      <br />
                      support@elegift.com
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-clock contact-icon"></i>
                    <div className="contact-details">
                      <strong>Business Hours:</strong>
                      <br />
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="payment-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h6 className="payment-title">We Accept</h6>
              <div className="payment-methods">
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="payment-method" />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="payment-method" />
                <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="payment-method" />
                <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="payment-method" />
                <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="payment-method" />
                <img src="/placeholder.svg?height=30&width=50" alt="Google Pay" className="payment-method" />
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="security-badges">
                <img src="/placeholder.svg?height=40&width=80" alt="SSL Secure" className="security-badge" />
                <img src="/placeholder.svg?height=40&width=80" alt="Money Back Guarantee" className="security-badge" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2 mb-md-0">
              <p className="copyright-text">
                © 2024 EleGift. All rights reserved. |
                <a href="/privacy" className="footer-link">
                  {" "}
                  Privacy Policy
                </a>{" "}
                |
                <a href="/terms" className="footer-link">
                  {" "}
                  Terms of Service
                </a>{" "}
                |
                <a href="/cookies" className="footer-link">
                  {" "}
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="powered-by">
                Powered by{" "}
                <a href="#" className="footer-link">
                  WPDeveloper
                </a>{" "}
                | Designed with <i className="fas fa-heart text-danger"></i> for gift lovers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
