import React from "react";

// Ejemplo de testimonios (puedes sustituirlo con tus datos reales)
const testimonios = [
  {
    id: 1,
    titulo: "Me cambió la vida esto",
    texto:
      "¡Me encantó esta agenda digital! Me la recomendaron y fue un antes y un después en mi organización diaria.",
    nombre: "Claudia Carranza",
    estrellas: 5,
    icono: "💖",
  },
  {
    id: 2,
    titulo: "Un antes y un después en mi organización",
    texto:
      "Esta agenda digital ha sido el mejor descubrimiento del año. Me ha ayudado a ser más disciplinado con mis proyectos.",
    nombre: "María González",
    estrellas: 5,
    icono: "✨",
  },
];

const Testimonios = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonios.map((testimonio) => (
        <div
          key={testimonio.id}
          className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-center w-full">{testimonio.titulo}</h3>
          </div>
          <p className="text-gray-600">{testimonio.texto}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-500 font-bold">{testimonio.nombre}</span>
            <span>{"⭐".repeat(testimonio.estrellas)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonios;
