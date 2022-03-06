import "../index.css";

function Card() {
  return (
    <section>
      <div className="container">
        <div className="card">
          <p className="heading__views">100k PAGEVIEWS</p>
          <p className="pricing">$16.00/month</p>
          <div className="toggle">
            <span className="billing__monthly">Monthly Billing</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="billing__yearly">Yearly Billing</span>
            <span className="billing__discount">-25%</span>
          </div>
          <hr className="line"/>
        </div>
      </div>
    </section>
  );
}
export default Card;
