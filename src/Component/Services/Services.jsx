    const services = [
  {
    title: "Odoo ERP services.",
    text: "Implementation, customization, integration and support."
  },
  {
    title: "Custom software development.",
    text: "Software designed specifically around your business."
  },
  {
    title: "AI & automation.",
    text: "Intelligent systems that reduce repetitive work."
  },
  {
    title: "IT staff augmentation.",
    text: "Extend your team with experienced technology professionals."
  },
  {
    title: "Digital transformation.",
    text: "Modernize your systems and business processes."
  },
  {
    title: "Cloud & managed services.",
    text: "Reliable infrastructure, hosting and technical support."
  }
];

function Services() {
  return (
    <section className="services section">

      <div className="section-heading">
        <p>OUR SERVICES</p>

        <h2>
          Six services. One
          <br />
          <span>accountable partner.</span>
        </h2>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <span className="service-number">
              0{index + 1}
            </span>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <span className="arrow">↗</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;