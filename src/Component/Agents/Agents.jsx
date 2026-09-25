import agent from "../../assets/agents.jpg";

function Agents() {
  return (
    <section className="agents-section">

      {/* LEFT SIDE - IMAGE */}
      <div className="agents-image">
        <img
          src={agent}
          alt="NETLINKS AI automation platform"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="agents-content">

        <p className="agents-label">
          02, AI & AUTOMATION
        </p>

        <h2>
          Agents that don't just
          <br />
          chat, <span>they work.</span>
        </h2>

        <p className="agents-description">
          Production AI agents that close tickets, reconcile invoices,
          and answer procurement queries. Grounded, governed,
          observable, not demos.
        </p>

        <ul className="agents-list">
          <li>
            Retrieval-grounded agents with full citation and audit trail
          </li>

          <li>
            AI-powered ERP: intelligent automation inside Odoo workflows
          </li>

          <li>
            Human-in-the-loop controls for regulated and high-stakes processes
          </li>

          <li>
            Typical outcomes: 30%+ reduction in manual-task hours
          </li>
        </ul>

        <a href="#" className="agents-btn">
          See how it works <span>↗</span>
        </a>

      </div>

    </section>
  );
}

export default Agents;