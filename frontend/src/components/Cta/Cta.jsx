import React, { useState, useEffect } from "react";
import "./CTA.css";
const Cta = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Activa la animación
      setTimeout(() => setIsAnimating(false), 500); // Desactiva la animación después de 0.5s
    }, 4000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="hidden lg:flex flex-wrap py-8 bg-gray-800 px-2 lg:px-20 xl:px-20">
      <div className="w-full px-2 lg:px-14">
        <a  href="https://pay.hotmart.com/B97116025R">
          {" "}
          <button
           
            className={`poppins-semibold text-3xl text-gray-800 px-4 py-2 bg-gray-100 rounded-3xl ${
              isAnimating ? "move-animation" : ""
            }`}
          >
            ¡Descarga 'El Libro Negro del Trading' Ahora!
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Cta;
