import React from "react";
// import { Button } from 'react-scroll'
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from '../assets/hero.svg'

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">Knowledge with</h2>
        <span className=" text-blue-600 text-5xl font-semibold">eLearning</span>
        <p className=" text-neutral-500 mt-5 text-start">
          eLearning is your gateway to a world of limitless learning
          possibilities.With our cutting-edge eStudyy platform,you can explore a
          vast library of courses,from academic subjects to pratical skills,all
          designed to help you achieve your goals.
        </p>
        <Link to="contact" spy={true} duration={500} smooth={true}>
        <Button title="Contact Us"  />
         
        </Link>
      </div>
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
