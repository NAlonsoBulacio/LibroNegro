import React from "react";
import "./AnnouncementBar.css";
import Marquee from "react-fast-marquee";
const AnnouncementBar = () => {
  return (
    <div className="w-screen bg-gray-800 text-gray-100">
      <Marquee>
        <div class="flex py-4 gap-x-8 poppins-semibold">
          <div class=" px-6">
            <span>
              {" "}
              💥 ¡Descarga "El Libro Negro del Trading" con un 70% de descuento
              y recibe como regalo: el curso "Estrategia HACK", acceso a nuestra
              comunidad privada y 1 cupo en el Hack Trading Club! 🎉💥
            </span>
          </div>
          <div class="">
            <span>
              {" "}
              💥 ¡Descarga "El Libro Negro del Trading" con un 70% de descuento
              y recibe como regalo: el curso "Estrategia HACK", acceso a nuestra
              comunidad privada y 1 cupo en el Hack Trading Club! 🎉💥
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default AnnouncementBar;
