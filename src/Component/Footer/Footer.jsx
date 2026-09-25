import netlinksLogo from "../../assets/netlinkslogo.jpg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1: Logo and Contact */}
        <div className="footer-about">

          <img
            src={netlinksLogo}
            alt="NETLINKS Logo"
            className="footer-logo"
          />

          <p className="footer-description">
            A global technology partner for Odoo ERP
            implementation, custom software development,
            AI automation, and digital transformation.
          </p>

          <div className="footer-contact">
            <a href="mailto:info@netlinks.af">
              info@netlinks.af
            </a>

            <a href="tel:0773020101">
              077-302-0101
            </a>

            <p>
              NETLINKS Plaza, Street 6, Lane 3,
              Share-e-naw Kabul, Afghanistan
            </p>
          </div>

          {/* Social Media */}
          <div className="footer-socials">

            <a href="https://x.com/" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="https://github.com/" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://instagram.com/" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://youtube.com/" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>

          </div>
        </div>

        {/* Column 2: Solutions */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>

          <a href="#">CRM</a>
          <a href="#">Sales management</a>
          <a href="#">Point of sale</a>
          <a href="#">Accounting</a>
          <a href="#">Inventory</a>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4>SERVICES</h4>

          <a href="#">Odoo ERP services</a>
          <a href="#">Custom software</a>
          <a href="#">AI & automation</a>
          <a href="#">IT staff augmentation</a>
          <a href="#">Digital transformation</a>
          <a href="#">Cloud & managed</a>
        </div>

        {/* Column 4: Industries */}
        <div className="footer-column">
          <h4>INDUSTRIES</h4>

          <a href="#">Manufacturing</a>
          <a href="#">Retail & e-commerce</a>
          <a href="#">Trades & field services</a>
          <a href="#">Professional services</a>
          <a href="#">Nonprofits</a>
        </div>

        {/* Column 5: Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <a href="#">About</a>
          <a href="#">Customers</a>
          <a href="#">Service areas</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">NETLINKS US</a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p className="footer-copyright">
          © 2026 NETLINKS. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Sitemap</a>
          <span>·</span>
          <a href="#">Business ethics</a>
          <span>·</span>
          <a href="#">Privacy policy</a>
          <span>·</span>
          <a href="#">Terms of use</a>
          <span>·</span>
          <a href="#">Dark mode</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;