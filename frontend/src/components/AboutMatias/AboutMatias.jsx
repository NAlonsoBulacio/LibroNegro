import React from "react";
import { matias } from "../../assets";
const AboutMatias = () => {
  return (
    <div className="image-text-section bg-gray-100 py-10 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Imagen */}
        <div className=" flex flex-wrap items-start space-y-3 text-left">
          <h2 className="text-3xl poppins-bold text-gray-800">
           Conocé a Matias 🚀
          </h2>
          
          <p className="text-gray-700 poppins-regular text-lg">
          Me llamo Matias, hace 7 años hago trading, desde mediados del 2017, con resultados auditados, desde principios del 2023 con toda la comunidad hacemos trading en vivo gratis

          </p>
          <p className="text-gray-700 poppins-regular text-lg">
          Te traigo conocimiento que me costó mucho conseguir, años de estudio en materias como economía, programación, ciencia de datos, y que muy pocas personas tienen a día de hoy en las redes, nadie brinda todo este conocimiento junto.

          </p>
          <p className="text-gray-700 poppins-regular text-lg">
          Al igual que ustedes fracase mucho en estos 7 años

          </p>
          <p className="text-gray-700 poppins-regular text-lg">
          Hoy, después de años perfeccionando un enfoque que combina análisis fundamental, cuantitativo y de datos, he ayudado a más de 40 personas a alcanzar consistencia y resultados reales en el mercado.

          </p>
          {/* <button className="cta-button bg-black text-white py-2 px-6 rounded-md poppins-semibold hover:bg-gray-800">
            👉AGREGAR AL CARRITO
          </button> */}
        </div>
        {/* Columna derecha: Título, texto, y botón */}
        <div className="image-container flex justify-center  h-[400px]">
          <img
            src={matias} // Cambia esta URL por tu imagen
            alt="Descripción de la imagen"
            className="rounded-3xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMatias;
