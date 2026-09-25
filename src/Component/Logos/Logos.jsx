
import chemonics from "../../assets/chemonics.jpg";
import daBank from "../../assets/da-afghanistan-bank.jpg";
import etisalat from "../../assets/etisalat.jpg";
import giz from "../../assets/giz.jpg";
import ifc from "../../assets/ifc.jpg";
import siemens from "../../assets/siemens.jpg";
import unWomen from "../../assets/un-women.jpg";
import usaid from "../../assets/usaid.jpg";
import worldBank from "../../assets/world-bank.jpg";

function Logos() {
  const logos = [
    { image: chemonics, name: "Chemonics" },
    { image: daBank, name: "Da Afghanistan Bank" },
    { image: etisalat, name: "Etisalat" },
    { image: giz, name: "GIZ" },
    { image: ifc, name: "IFC" },
    { image: siemens, name: "Siemens" },
    { image: unWomen, name: "UN Women" },
    { image: usaid, name: "USAID" },
    { image: worldBank, name: "World Bank" },
  ];

  return (
    <section className="trusted">
      <p className="trusted-title">
        TRUSTED BY GLOBAL ENTERPRISES AND INSTITUTIONS
      </p>

      <div className="logo-wrapper">
        <div className="logo-track">

          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}

          {/* Second set for infinite animation */}
          {logos.map((logo, index) => (
            <div className="logo-item" key={`copy-${index}`}>
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Logos;