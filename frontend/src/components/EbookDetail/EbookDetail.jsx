import React from "react";
import video from "../../assets/videoGif.mp4";

const EbookDetail = () => {
  
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaAddToCartAbout",
      eventCategory: "AddToCart",
      eventAction: "Submit",
    });
  };
  return (
    <div className="image-text-section bg-gray-100 py-10 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Texto */}
        <div className="flex flex-wrap items-start space-y-3 text-left">
          <h2 className="text-3xl poppins-bold text-gray-800">
            Curso estrategia HACK TRADING, comunidad y 1 cupo a la academia
          </h2>
          <span className="poppins-regular-italic text-gray-500">
            ¿Por qué regalan un cupo a la academia si vale 100 usd por mes?
          </span>
          <p className="text-gray-700 poppins-regular text-lg">
            Con la compra del ebook tienes un cupo de regalo pero con el único
            requisito de operar con nuestro broker socio, de esta manera, <span className="poppins-bold">TODO
            ESTÁ INCLUIDO CON TAN SOLO $14,97 USD</span>
          </p>
          <a  href="https://pay.hotmart.com/B97116025R"  onClick={() => handleClick()}>
          <button className="cta-button bg-black text-white py-2 px-6 rounded-md poppins-semibold text-xl hover:bg-gray-800">
            👉AGREGAR AL CARRITO
          </button>
          </a>
        </div>
        {/* Columna derecha: Video */}
        <div className="video-container flex justify-center">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default EbookDetail;
