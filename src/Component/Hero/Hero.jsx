function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-text">
          SOFTWARE • AI • AUTOMATION
        </p>

        <h1>
          Enterprise Odoo,
          <br />
          custom software,
          <br />
          and AI,
          <br />
          <span>engineered in Afghanistan.</span>
        </h1>

        <p className="hero-description">
          We build powerful digital systems that help organizations
          improve their operations, automate processes and grow faster.
        </p>

        <button className="primary-button">
          Talk to our team →
        </button>

        <div className="hero-stats">

          <div>
            <strong>500K+</strong>
            <small>Users served</small>
          </div>

          <div>
            <strong>20 yrs</strong>
            <small>Experience</small>
          </div>

          <div>
            <strong>Jobs.af</strong>
            <small>Trusted platform</small>
          </div>

        </div>

      </div>

      <div className="hero-visual">
  <img
    src="/src/assets/hero-illustration.jpg"
    alt="Enterprise software illustration"
  />
</div>

    </section>
  );
}

export default Hero;