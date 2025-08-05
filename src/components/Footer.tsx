export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">🌱 Grow a Garden Recipes</h3>
            <p className="footer-description">
              Your ultimate guide to mastering every recipe in Grow a Garden. 
              From basic hot dogs to prismatic pizzas, we&apos;ve got you covered!
            </p>
          </div>

          <div className="footer-section">
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Grow a Garden Recipes Guide. This is an unofficial fan-made guide for the Roblox game Grow a Garden.
            </p>
            <div className="footer-social">
              <span className="social-text">Made with 💚 for the Grow a Garden community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
