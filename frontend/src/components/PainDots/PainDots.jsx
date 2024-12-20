import React from "react";
import { persona } from "../../assets";

const ImageWithTextSection = () => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaAddToCartPain",
      eventCategory: "AddToCart",
      eventAction: "Submit",
    });
  };

  return (
    <div className="image-text-section py-10 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Imagen */}
        <div className="image-container hidden lg:flex justify-center">
          <img
            src={persona}
            alt="Descripción de la imagen"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Columna derecha: Título, texto, y botón */}
        <div className=" flex flex-wrap items-start space-y-4 text-left">
          <h2 className="text-3xl poppins-bold text-gray-800">
            ¿Cuántas veces has perdido dinero porque pensaste que el trading era
            sencillo pero terminaste fallando?
          </h2>
          <p className="text-gray-700 poppins-regular text-lg">
            Estoy seguro de que si no{" "}
            <span className="poppins-bold">perdiste dinero</span> en trading,
            tarde o temprano te pasará, créeme, no es como lo ves en redes
            sociales, realmente es{" "}
            <span className="poppins-bold">muy difícil</span>, me dejé la piel
            por ser rentable, tuve que hacer{" "}
            <span className="poppins-bold">miles de cosas</span> y no quiero que
            tú pases por lo mismo, por eso lancé este proyecto.
          </p>

          <a
            href="https://pay.hotmart.com/B97116025R"
            onClick={() => handleClick()}
          >
            <button className="cta-button bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 text-xl poppins-semibold">
              Agregar al carrito 👉
            </button>
          </a>
        </div>
        {/* Columna izquierda: Imagen */}
        <div className="image-container flex lg:hidden justify-center  h-[400px]">
          <img
            src={persona}
            alt="Descripción de la imagen"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextSection;
