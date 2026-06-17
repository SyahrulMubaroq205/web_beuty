import { motion } from "framer-motion";
import { useRef } from "react";

const ProductCard = ({ item }) => {
  const cardRef = useRef(null);

  // 🎯 3D TILT EFFECT
  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="glass rounded-3xl p-5 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="rounded-2xl w-full h-[300px] object-cover"
      />

      {/* CONTENT */}
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">{item.title}</h2>

        <p className="text-gray-400 mt-3">{item.desc}</p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">
          {/* SHOPEE BUTTON */}
          <a
            href={item.shopee}
            target="_blank"
            className="bg-pink-500 px-5 py-3 rounded-full hover:bg-pink-400 transition"
          >
            Buy Shopee
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            className="glass px-5 py-3 rounded-full hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;