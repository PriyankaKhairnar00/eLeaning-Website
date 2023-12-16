import React from 'react'
import Heading from '../layout/Heading'
import webImg from "../assets/webdev.svg"
import appImg from "../assets/app.svg"
import graphicsImg from "../assets/graphic.svg"
import digitalImg from "../assets/digital.svg"
import CoursesCards from '../layout/CoursesCards'

const Courses = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
        <Heading title1="Our" title2="Courses"/>
        <div className=' flex flex-wrap justify-center gap-6 mt-6'>
          <CoursesCards img={webImg} title="Web Development" />
          <CoursesCards img={appImg} title="App Development" />
          <CoursesCards img={graphicsImg} title="Graphics Designer" />
          <CoursesCards img={digitalImg} title="Digital Markrting" />

        </div>
    </div>
  )
}

export default Courses