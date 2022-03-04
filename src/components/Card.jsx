import "../index.css";

function Card() {
  return (
    <section>
      <div className="container">
        <div className="card">
          <p>100k PAGEVIEWS</p>
          <p>$16.00/month</p>
          <div className="toggle">
            <span>Monthly Billing</span>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label>
            <span>Yearly Billing</span>
            <span>-25%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Card;
