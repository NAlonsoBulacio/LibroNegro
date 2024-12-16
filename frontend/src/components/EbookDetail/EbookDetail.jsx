import React from "react";

const EbookDetail = () => {
  return (
    <div className="image-text-section bg-gray-100 py-10 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Imagen */}
        <div className=" flex flex-wrap items-start space-y-3 text-left">
          <h2 className="text-3xl poppins-bold text-gray-800">
            Curso estrategia HACK TRADING, comunidad y 1 cupo a la academia
          </h2>
          <span className="poppins-regular-italic text-gray-500">¿Por qué regalan un cupo a la academia si vale 100 usd por mes? 
          </span>
          <p className="text-gray-700 poppins-regular text-lg">
            Con la compra del ebook tienes un cupo de regalo pero con el único
            requisito de operar con nuestro broker socio, de esta manera, TODO
            ESTÁ INCLUIDO CON TAN SOLO $14,97 US
          </p>
          <button className="cta-button bg-black text-white py-2 px-6 rounded-md poppins-semibold text-xl hover:bg-gray-800">
            👉AGREGAR AL CARRITO
          </button>
        </div>
        {/* Columna derecha: Título, texto, y botón */}
        <div className="image-container flex justify-center">
          <img
            src="https://via.placeholder.com/500x400" // Cambia esta URL por tu imagen
            alt="Descripción de la imagen"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EbookDetail;
