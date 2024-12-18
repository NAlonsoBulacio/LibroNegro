import React, { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registro2 from "../Registro/Registro2";
import CountdownTimer from "../Countdown/CountdownTimer";
import { best_seller, libro_negro, verificado } from "../../assets/index";
import { FaCheck } from "react-icons/fa";

const ProductDetail = ({ homeVariant, handleVariantDetail }) => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState({
    id: 2,
    title: "El Libro Negro del Trading",
    variant: "1 ebook + Regalos",
    price: 14.97,
    compare_price: 100,
    free_shipping: true,
    img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_10.png?v=1712783675",
    contains: [
      ` Por qué el  <span style="font-weight: normal;"> 95% fracasa </span>`,
      `Una solución precisa para <span style="font-weight: normal;"> formar parte del 5% que tiene éxito </span>`,
      `Regalo: <span style="font-weight: normal;">masterclass + comunidad + cupo a la academia </span> para que implementes la solución`,
    ],
    link: "https://pay.hotmart.com/B97116025R",
  });
  const variants = [
    {
      id: 2,
      title: "El Libro Negro del Trading",
      variant: "1 ebook + Regalos",
      price: 14.97,
      compare_price: 100,
      free_shipping: true,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_10.png?v=1712783675",
      contains: [
        ` Por qué el  <span style="font-weight: normal;"> 95% fracasa </span>`,
        `Una solución precisa para <span style="font-weight: normal;"> formar parte del 5% que tiene éxito </span>`,
        `Regalo: <span style="font-weight: normal;">masterclass + comunidad + cupo a la academia </span> para que implementes la solución`,
      ],
      link: "https://pay.hotmart.com/B97116025R",
    },
  ];

  useEffect(() => {
    if (homeVariant !== null) {
      handleSelectVariant(homeVariant);
      handleSelectedVariant(homeVariant);
    }
  }, [homeVariant]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  const handleSelectedVariant = (variantId) => {
    handleVariantDetail(variantId);
    const selectedVariant = variants.find(
      (variant) => variant.id === variantId
    );
    setObjectVariant(selectedVariant);
  };

  const handleShowRegistro = () => {
    setShowRegistro(!showRegistro);
  };

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaAddToCart",
      eventCategory: "AddToCart",
      eventAction: "Submit",
    });
  };

  const verified = <img src={verificado} alt="verificado" />;

  const ListItem = ({ text }) => (
    <div className="flex items-center gap-2 mb-4 text-left">
      <div className="w-[26px] h-[26px] flex items-center justify-center">
        {verified}
      </div>
      <span className="poppins-semibold text-gray-800 text-md lg:text-lg ">
        {text}
      </span>
    </div>
  );
  return (
    <div className="bg-white flex flex-wrap lg:flex-nowrap space-y-2 overflow-hidden">
      <div className="flex flex-col gap-6 lg:w-2/4 ">
        <div className="sticky top-0">
          <img
            src={libro_negro}
            alt=""
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-start items-start w-full lg:w-1/2 px-0 lg:px-10 space-y-2">
        <div className="w-full flex justify-start items-start">
          <h1 className="text-4xl lg:text-4xl text-left text-gray-800 poppins-semibold">
            {objectVariant.title}
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[14px] text-left poppins-light">
          Por qué el 95% fracasa y una solución precisa para formar parte del 5%
          que tiene éxito
        </div>
        <div className="w-full flex justify-start items-start ">
          <h1 className="text-gray-700 poppins-regular text-left">
            Ebook + masterclass "Estrategia HACK" + comunidad + 1 cupo en el
            Hack Trading Club - Todo en uno
          </h1>
        </div>
        <div className="w-full flex h-6 ">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <h1 className="text-gray-500 text-xl mx-2">(4,8/5)</h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-md lg:text-lg list-none  poppins-regular">
            {objectVariant.contains?.map((phrase, index) => (
              <li
                key={index}
                className="font-bold flex items-start gap-x-2 justify-start"
              >
                <FaCheck className="text-yellow-500 mt-1 text-lg w-8 text-left" />
                <span
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: phrase }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-gray-800"></div>
            <div className="px-4 font-sans-400">Compra Segura</div>
            <div className="flex-grow h-[2px] bg-gray-800"></div>
          </div>
          {variants?.map((variant, index) => {
            const savings = variant.compare_price - variant.price;
            return (
              <div
                key={index}
                className={`${
                  variant.id === selectedVariant
                    ? "bg-gray-200  border-[#dfb939]"
                    : "bg-gray-100 border-gray-400 "
                } relative h-24 w-full  border-[3px] rounded-2xl flex gap-4 py-4 lg:py-4 px-2 lg:px-4 lg:px-8 cursor-pointer  hover:bg-gray-200`}
                onClick={() => handleSelectedVariant(variant.id)}
              >
                <div className="relative w-[28px] h-6 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-gray-700"></div>

                  <div className="absolute w-4 h-4 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                      <p className="poppins-semibold text-gray-800 text-left text-xl lg:text-xl">
                        {variant.variant}
                      </p>
                    
                    </div>
                    <p className="text-sm poppins-light text-left">
                      Acceso de por vida
                    </p>
                  </div>
                  <div className="">
                    <p className="text-2xl poppins-semibold text-gray-900">
                      ${variant.price}
                    </p>
                    <p className="poppins-regular text-gray-600 line-through">
                      ${variant.compare_price}
                    </p>
                  </div>
                </div>
                {variant.id === 2 ? (
                  <div className="absolute w-10 z-40 lg:w-12 top-[-18px] lg:top-[-10px] right-[-4px] lg:right-[-23px]">
                    <img
                      src={best_seller}
                      alt="best-seller"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full ">
          <a href={objectVariant.link} onClick={() => handleClick()}>
            <button
              id="add-to-bag-button"
              className="w-full rounded-2xl bg-gray-800 text-2xl poppins-semibold text-gray-100 px-2 py-4"
            >
              {`AGREGAR AL CARRITO`}
            </button>
          </a>
        </div>

       
        <div className="w-full ">
          <QuestionsAnswersHome />
          <div className="py-4">
            <ListItem text="DESCARGA INSTANTÁNEA" />
            <ListItem text="COMPATIBLE CON TODOS LOS DISPOSITIVOS" />
          </div>
        </div>
        <div className="flex items-start w-full p-4 border rounded-lg shadow-md bg-white text-left">
         

          {/* Contenido del testimonio */}
          <div className="pl-4 w-full">
            {/* Nombre del usuario y detalles */}
            <div className="flex items-center mb-1">
              <h3 className="poppins-bold text-lg mr-2">Gabriel Cortez</h3>
              <span className="text-gray-500 text-sm">1 opinión • AR</span>
            </div>

            {/* Estrellas de calificación */}
            <div className="flex items-center mb-2 gap-x-4">
              <div>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm poppins-regular">
                9 ago 2023
              </p>
            </div>

            {/* Fecha */}

            {/* Título y descripción */}
            <h4 className="poppins-bold mb-1">Completo, ordenado y claro.</h4>
            <p className="text-sm poppins-regular text-gray-700 leading-relaxed">
              Curso ordenado, va al hueso y super completo. Cuando adelanta
              algo, en la clase siguiente lo explica con detalles.
              <br />
              Se nota que es un estudiado y leído del tema y no el típico
              Youtuber que es puro humo.
            </p>

            {/* Fecha de la experiencia */}
            <p className="text-xs poppins-regular text-gray-500 mt-2">
              <span className="poppins-bold">Fecha de la experiencia:</span> 09
              de agosto de 2023
            </p>
          </div>
        </div>
        {/* <div className="w-full text-center text-lg font-sans-500 text-[#1c4cfc]">
        123,000+ Satisfied Clients
        </div> */}
      </div>
      {showRegistro ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Registro2 handleShowRegistro={handleShowRegistro} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDetail;
