import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
import QuestionSvg from "../../utils/QuestionSvg";
const QuestionsAnswersEnd = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "¿Hay garantía?",
      answer: "Si bien todo lo que damos es 100% educativo y no prometemos resultados, tienes una garantía de 7 días después de tu compra asegurada por Hotmart!",
      answer_id: "4",
    },
    {
      question: "¿Qué incluye el ebook?",
      answer: "El ebook incluye:<br />" +
            "<ul>" +
              "<li>Ebook: “El Libro Negro del Trading”</li>" +
              "<li>6 libros digitales para mejorar tu trading</li>" +
              "<li>Acceso a una Masterclass en vivo gratuita para aprender la estrategia HACK que utilizan los grandes fondos de inversión</li>" +
              "<li>1 cupo gratuito a la academia <strong>HACK TRADING CLUB</strong></li>" +
            "</ul>",
      answer_id: "1",
    },
    {
      question: "¿Cómo puedo acceder a la masterclass gratuita?",
      answer: "Una vez recibas el ebook, te compartiremos el link de nuestra comunidad de WhatsApp donde estaremos dando la Masterclass en vivo a través de Google meet.",
      answer_id: "2",
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con mi compra?",
      answer: "Imposible que eso pase ya que el valor que recibirás instantáneamente con tu compra de $14.97 es altísimo.<br /> Pero si eso llega a ocurrir, tienes garantía de 7 días después de tu compra asegurada por Hotmart. <br/>Si pides la devolución, perderás el acceso a la masterclass y a la academia.",
      answer_id: "3",
    },
  ];

  return (
    <div
      id="q&a"
      className={`w-full flex flex-wrap justify-center items-center gap-y-12 bg-gray-800 ${
        landing ? "py-10" : "py-0"
      }`}
    >
      {landing ? (
        <div className="w-full flex flex-wrap justify-center">
          <h1 className="w-full text-center  text-yellow-700 font-sans-400 text-xl">
            Respuestas a tus preguntas
          </h1>
          <p className="w-full text-center text-gray-900 font-sans-500 text-4xl">
            Preguntas frecuentes
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px] p-4 rounded-3xl bg-gray-100">
        {QAs?.map((qa, index) => (
          <div className=" w-full" key={index}>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-start space-x-2 text-gray-200 py-2"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                {index === 0 && <QuestionSvg />}
                {index === 1 && <QuestionSvg />}
                {index === 2 && <QuestionSvg />}
                {index === 3 && <QuestionSvg />}

                <span className="w-3/4 flex-grow text-left poppins-semibold text-gray-800 text-md lg:text-lg">
                  {qa.question}
                </span>
                <IoIosArrowDown
                  className="w-1/4 md:w-auto text-gray-700"
                  style={{
                    transform: `rotate(${
                      answer === qa.answer_id ? 180 : 0
                    }deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full  answer text-left ${
                answer === qa.answer_id ? "show" : ""
              }`}
            >
              <span
                className="flex-grow text-left poppins-regular text-gray-500 text-md lg:text-lg"
                dangerouslySetInnerHTML={{ __html: qa.answer }}
              ></span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[0.5pxrem] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersEnd;
