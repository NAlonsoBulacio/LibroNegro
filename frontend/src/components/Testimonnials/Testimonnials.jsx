import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../assets/star.svg";

import {
  testimonio1,
  testimonio10,
  testimonio11,
  testimonio2,
  testimonio3,
  testimonio4,
  testimonio5,
  testimonio6,
  testimonio7,
  testimonio8,
  testimonio9,
} from "../../assets";
const Testimonnials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const before_after = [
    testimonio1,
    testimonio10,
    testimonio11,
    testimonio2,
    testimonio3,
    testimonio4,
    testimonio5,
    testimonio6,
    testimonio7,
    testimonio8,
    testimonio9,
  ];
  return (
    <div className="gap-y-8 py-10">
      <div className="w-full flex flex-wrap justify-center items-center gap-2 py-8">
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center text-2xl lg:text-3xl text-balance text-gray-900 poppins-bold">
            Los resultados y opiniones de mis alumnos 💛
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center ">
        <Slider {...settings} className="w-full flex justify-center">
          {before_after.map((testimoinio, index) => (
            <div
              key={index}
              className="px-0 lg:px-2 h-[520px] !flex justify-center"
            >
              <img
                className="rounded-lg w-auto h-full"
                src={testimoinio}
                alt={`testimonio ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonnials;
