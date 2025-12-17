import "./App.css";
import heroImg from "./assets/Home.png";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Modern E-Commerce Store</h1>
        <p>
          Shop smarter with the best products at unbeatable prices.
        </p>
    
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="shopping" />
      </div>
    </section>
  );
}
