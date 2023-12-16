import React from "react";
import Heading from "../layout/Heading";
import RewiewCards from "../layout/RewiewCards";
import img1 from "../assets/bukku.jpg";
import img2 from "../assets/prisha.png";
import img3 from "../assets/piu.jpg";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <RewiewCards img={img1} />
        <RewiewCards img={img2} />
        <RewiewCards img={img3} />
      </div>
    </div>
  );
};

export default Reviews;
