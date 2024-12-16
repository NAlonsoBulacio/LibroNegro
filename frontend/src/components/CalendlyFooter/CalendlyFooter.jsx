import React, { useState, useEffect } from "react";

const CalendlyFooter = ({  }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Activa la animación
      setTimeout(() => setIsAnimating(false), 500); // Desactiva la animación después de 0.5s
    }, 4000); 

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);





  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.fbq("trackCustom", "Checkout");
  };
  return (
    <footer
      className={`lg:hidden fixed bottom-0 left-0 w-screen h-[90px]k h-auto bg-gray-800 flex flex-wrap justify-center border-t border-gray-400 items-center transition-all duration-300 rounded-t-2xl z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
     
      <div className="flex justify-center items-center py-3 px-2">
      
        <div>
          <a href={""}
          onClick={() => handleClick()}
          >
           <button
          className={`poppins-semibold text-xl text-gray-800 text-balance px-2 py-2 bg-gray-100 rounded-3xl ${
            isAnimating ? "move-animation" : ""
          }`}
        >
          ¡Descarga 'El Libro Negro del Trading' Ahora!
        </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
