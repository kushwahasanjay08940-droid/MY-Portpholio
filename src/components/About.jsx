import React from "react";
import Tilt from "react-tilt";
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
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
I’m Manu Saini, a Computer Science and Engineering student at the Institute of Engineering and Technology (IET), Lucknow, with a strong passion for Full Stack Web Development and Competitive Programming.

Currently working as a Software Development Engineer (SDE 1) at Tranzita Systems, I’ve designed and developed multiple enterprise-grade platforms—such as a Vehicle Management System (VMS) and a Change Management Process (CMP) platform for P&G—covering everything from client requirement analysis to backend architecture, database design, and frontend workflows.

Over my professional journey, I’ve gained 8+ months of internship and development experience across startups like Bluestock Fintech and Hashedbit Innovations, where I built scalable applications, implemented CI/CD pipelines, optimized API performance, and improved system efficiency.

My technical toolkit includes React.js, Next.js, Node.js, Express.js, TypeScript, MySQL, PostgreSQL, MongoDB, Docker, Firebase, and cloud platforms like AWS, Azure, and GCP. I follow Agile/DevOps methodologies to deliver secure, production-ready applications.

As a competitive programmer, I’ve achieved a global rank of 682 on CodeChef Starters and 1983 on LeetCode Biweekly Contests, with a CUET-UG All India Rank of 57. I actively participate in college tech communities such as GDSC and Fractal Coding Club, continuously honing my technical and problem-solving skills.</motion.p>

<motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  <p>
    <span className="text-white">Degree:</span> B-Tech in Computer Science and Engineering (AI) &nbsp; <span className="text-white">CGPA:</span> 8.8
  </p>
  <p className='mt-2'>
    <span className="text-white">Email:</span> manusaini22092003@gmail.com
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

