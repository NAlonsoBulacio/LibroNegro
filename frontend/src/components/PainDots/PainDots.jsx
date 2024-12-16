import React from "react";
import { persona } from "../../assets";

const ImageWithTextSection = () => {
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
            ¿Te sientes desorganizado y como si los días no te alcanzan?
          </h2>
          <p className="text-gray-700 poppins-regular text-lg">
            Con múltiples tareas y responsabilidades, es fácil perder el control. 
            Sin una herramienta eficiente, las tareas se acumulan, los plazos se 
            escapan, y el estrés se apodera de ti. ¡Pero no tiene por qué ser así!
          </p>
          <button className="cta-button bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 text-xl poppins-semibold">
            La Quiero 👉
          </button>
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
