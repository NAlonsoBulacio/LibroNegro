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
      answer: "respuesta 1",
      answer_id: "1",
    },
    {
      question: "¿Cómo puedo acceder al webinar gratuito?",
      answer: "respuesta 2",
      answer_id: "2",
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con mi compra?",
      answer: "respuesta 3",
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
