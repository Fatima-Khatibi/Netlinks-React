import platform from "../../assets/platform.jpg";
function Platform() {
  return (
    <section className="platform-section">

  {/* LEFT SIDE */}
  <div className="platform-content">

    <p className="platform-label">ONE PLATFORM</p>

    <h2>
      One platform. Every department.
      <span> Actually integrated.</span>
    </h2>

    <p className="platform-description">
      Certified Odoo partner, 50+ implementations, including a
      500,000-employee HR and payroll engagement for a national
      government with 1,000+ users. Finance, ops, sales, HR, and
      manufacturing in one platform.
    </p>

    <ul>
      <li>
        50+ Odoo deployments delivered, including a 500,000-employee
        HR, payroll, and custom modules engagement
      </li>

      <li>
        Odoo migration from SAP, NetSuite, Microsoft Dynamics,
        QuickBooks, and legacy Odoo
      </li>

      <li>
        Upgrade-safe custom Odoo modules by senior Python engineers
      </li>

      <li>
        Enterprise Odoo for manufacturing, distribution, field
        service, and public sector
      </li>
    </ul>

    <a href="#" className="platform-btn">
      Explore Odoo services ↗
    </a>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="platform-image">
    <img
      src={platform}
      alt="NETLINKS integrated Odoo platform dashboard"
    />
  </div>

</section>
  );
}

export default Platform;