import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Footer from "../../components/Footer/Footer";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import AnnouncementBar from "../../components/AnnouncementBar2/AnnouncementBar";
import Cta from "../../components/Cta/Cta";
import EbookDetail from "../../components/EbookDetail/EbookDetail";
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import QuestionsAnswersEnd from "../../components/QuestionsAnswersHome/QuestionsAnswersEnd";
import Header from "../../components/Header/Header";
import PainDots from "../../components/PainDots/PainDots";
import AboutMatias from "../../components/AboutMatias/AboutMatias";
import Testimonnials from "../../components/Testimonnials/Testimonnials";
const LandingPage = () => {
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

  const initialVariant = {
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
  };

  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };
  return (
    <div>
      <div className="overflow-hidden">
        <AnnouncementBar />{" "}
      </div>
      <div className="overflow-hidden">
        {" "}
        <Header />{" "}
      </div>
      <div className="px-4 lg:px-10 xl:px-24 bg-white space-y-6 lg:space-y-20 py-4 lg:py-6 overflow-hidden">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
          variants={variants}
          initialVariant={initialVariant}
        />
      </div>
      <EbookDetail />
      <PainDots />
      <AboutMatias />
      <Testimonnials />
      <Cta />
      <div className="px-4 py-6 lg:px-10 xl:px-24 bg-gray-800">
        {/* <DescriptionPercentage /> */}
        {/* <YoutubePlayer /> */}

        {/* <Reviews />
        <Ingredients /> */}
        <QuestionsAnswersEnd />
      </div>
      <CalendlyFooter
        handleVariantFooter={handleHomeVariant}
        homeVariant={homeVariant}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
