import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetailBundle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Testimonnials from "../../components/Testimonnials/Testimonnials";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import BenefitsandVideo from "../../components/BenefitsAndvideo/BenefitsandVideo";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooterBundle";
import Reviews from "../../components/Reviews/Reviews";
import DrBanner from "../../components/DrBanner/DrBanner";
import WhatIsGle from "../../components/WhatIsGle/WhatIsGleBundle";
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import QuestionsAnswersEnd from "../../components/QuestionsAnswersHome/QuestionsAnswersEnd";
import Cta from "../../components/Cta/Cta";
import Ingredients from "../../components/Ingedrients/Ingredients";
const LandingPageBundle = () => {
  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-10 xl:px-24 bg-white space-y-6 lg:space-y-20 py-4">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
        />
        <BenefitsandVideo />
        <WhatIsGle />
        <Testimonnials />
      </div>
      <DrBanner />
      <Cta />
      <div className="px-4 lg:px-10 xl:px-24">
        <DescriptionPercentage />
        <YoutubePlayer />
        <Reviews />
        <Ingredients />
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

export default LandingPageBundle;
