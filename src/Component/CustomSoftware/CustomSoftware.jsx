import custom from "../../assets/custom.jpg";
function CustomSoftware() {
  return (
    <section className="custom section">

      <div className="custom-text">

        <p>CUSTOM SOFTWARE</p>

        <h2>
          When nothing off-the-
          <br />
          shelf <span>quite fits.</span>
        </h2>

        <p>
          We build software around the way your organization
          actually works.
        </p>

        <ul>
          <li>Custom web applications</li>
          <li>Business dashboards</li>
          <li>API integrations</li>
          <li>Workflow automation</li>
        </ul>

      </div>

       {/* LEFT SIDE - IMAGE */}
            <div className="agents-image">
              <img
                src={custom}
                alt="NETLINKS AI automation platform"
              />
            </div>

    </section>
  );
}

export default CustomSoftware;