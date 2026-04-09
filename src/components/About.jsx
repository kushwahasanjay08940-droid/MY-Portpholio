import React from "react";
import Tilt from "react-tilt"; //for titl the card
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ComputersCanvas from './canvas/Computers';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)} //(direction, type, delay, duration)
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>


I’m a IT student with a strong interest in Full Stack Web Development and problem solving.

 I enjoy turning ideas into real-world projects and continuously learning new technologies to
 
  improve my development skills.

Currently focused on frontend and backend development, I am building projects,

 exploring modern frameworks, and strengthening my understanding of scalable web applications. 

 I believe in learning by doing, staying consistent, and growing step by step.

My goal is to become a proficient Full Stack Developer and create meaningful, efficient, 

and user-friendly applications.

</motion.p>



<motion.div
  variants={fadeIn("", "", 0.1, 1)} // start empty duration 1 second
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  {/* <p>
    <span className="text-white">Degree:</span> B-Tech in Computer Science and Engineering (AI) &nbsp; <span className="text-white">CGPA:</span> 8.8
  </p> */}
  <p className='mt-2'>
    <span className="text-white">Email:</span> kushwahasanjay08940@gmail.com
  </p>
</motion.div>

        
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

