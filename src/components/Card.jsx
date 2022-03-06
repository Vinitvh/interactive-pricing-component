import "../index.css";
import checkIcon from "./assets/icon-check.svg";

function Card() {
  return (
    <section>
      <div className="container">
        <div className="card">
          <p className="heading__views">100K PAGEVIEWS</p>
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
          <hr className="line" />
          <div className="info">
            <p>
              <img src={checkIcon} alt="Check" /> Unlimited websites
            </p>
            <p>
              <img src={checkIcon} alt="Check" /> 100% data ownership
            </p>
            <p>
              <img src={checkIcon} alt="Check" />
              Email reports
            </p>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Card;
