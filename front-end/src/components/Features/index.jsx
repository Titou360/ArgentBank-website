import FeatData from "../../data/features.json"
import "./features.css";

export default function Features() {
  const featData = FeatData;

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featData.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.icon} alt={feature.alt} className=" fadeIn feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}