import React from "react";

const CoursesCards = (props) => {
  return (
    <div
      className=" flex flex-col items-center justify-between bg-white border-lighttext md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg 
    hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
    >
      <div className=" w-3/5">
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3 className=" font-semibold text-lg text-center my-5">
          {props.title}
        </h3>
        <p className=" text-stone-500 text-center md:text-start">
          Studying Web Desiging Course is perfect choice for those kinds of
          students. Web Technologies basically works for Web Designing and Web
          Development which are most likely similar. These fields are having
          exciting areas of study like graphic designing, SEO, online (social)
          Marketing, coding and many more which leads to rapidly growing
          industry.
        </p>
      </div>
    </div>
  );
};

export default CoursesCards;
