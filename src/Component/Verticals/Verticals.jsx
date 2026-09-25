const industries = [
  "Manufacturing",
  "Retail & eCommerce",
  "Professional Services",
  "Public Sector",
  "Nonprofits",
  "Trades & Field Services"
];

function Verticals() {
  return (
    <section className="verticals section">

      <p>OUR INDUSTRY EXPERIENCE</p>

      <h2>
        Pattern recognition
        <br />
        <span>across verticals.</span>
      </h2>

      <div className="industry-list">

        {industries.map((industry, index) => (

          <div className="industry" key={index}>

            <span>0{index + 1}</span>

            <strong>{industry}</strong>

            <p>
              Technology solutions designed around
              the needs of this industry.
            </p>

            <span>→</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Verticals;