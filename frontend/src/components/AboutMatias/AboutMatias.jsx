import React from "react";
import { matias } from "../../assets";

const AboutMatias = () => {


  return (
    <div className="image-text-section bg-gray-100 py-10 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Texto */}
        <div className="flex flex-wrap items-start space-y-3 text-left">
          <h2 className="text-3xl poppins-bold text-gray-800">
            Conocé a Matias 🚀
          </h2>
          <p className="text-gray-700 poppins-regular text-lg">
            Me llamo <span className="font-bold">Matias</span>, hace{" "}
            <span className="font-bold">7 años</span> hago trading, desde mediados del{" "}
            <span className="font-bold">2017</span>, con resultados auditados. Desde principios del{" "}
            <span className="font-bold">2023</span>, con toda la comunidad hacemos{" "}
            <span className="font-bold">trading en vivo gratis</span>.
          </p>
          <p className="text-gray-700 poppins-regular text-lg">
            Te traigo <span className="font-bold">conocimiento</span> que me costó mucho conseguir, 
            años de estudio en materias como <span className="font-bold">economía, programación, 
            ciencia de datos</span>, y que muy pocas personas tienen a día de hoy en las redes. 
            <span className="font-bold">{" "}Nadie brinda todo este conocimiento junto.</span>
          </p>
          <p className="text-gray-700 poppins-regular text-lg">
            Al igual que ustedes, <span className="font-bold">fracasé</span> mucho en estos{" "}
            <span className="font-bold">7 años</span>.
          </p>
          <p className="text-gray-700 poppins-regular text-lg">
            Hoy, después de años perfeccionando un enfoque que combina{" "}
            <span className="font-bold">análisis fundamental, cuantitativo y de datos</span>, 
            he ayudado a más de <span className="font-bold">40 personas</span> a alcanzar{" "}
            <span className="font-bold">consistencia y resultados reales</span> en el mercado.
          </p>
        </div>
        {/* Columna derecha: Imagen */}
        <div className="image-container flex justify-center h-[400px]">
          <img
            src={matias} // Cambia esta URL por tu imagen
            alt="Matias Trader"
            className="rounded-3xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMatias;
