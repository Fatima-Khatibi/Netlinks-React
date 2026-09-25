const questions = [
  "What does NETLINKS do?",
  "How experienced is NETLINKS with Odoo?",
  "What industries does NETLINKS serve?",
  "How does an engagement with NETLINKS start?"
];

function FAQ() {
  return (
    <section className="faq section">

      <p>FAQ</p>

      <h2>Answers to what CIOs actually ask.</h2>

      <div className="faq-list">

        {questions.map((question, index) => (

          <div className="faq-item" key={index}>

            <span>{question}</span>

            <span>+</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;