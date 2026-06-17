import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import products from "./data/products";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    if (!glow) return;

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);
  return (
    <>
      <div className="hero-blur" />
      <div className="moving-light" />
      <div className="noise" />
      <div className="cursor-glow" />
      <div className="top-glow" />
      <Navbar />

      <Hero />

      <section
        id="products"
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        </div>
      </section>

      <Benefits />

      <CTASection />

      <Footer />
    </>
  );
}

export default App;