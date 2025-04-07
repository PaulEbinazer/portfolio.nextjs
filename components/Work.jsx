import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 "
    >
      <motion.h4
        initial={{ scale: 5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam
        accusantium maiores facilis dolor animi velit veritatis obcaecati ab,
        minima quasi eveniet amet! Ratione, placeat?
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4  my-10 gap-5 overflow-x-visible  "
      >
        {workData.map((project, index) => (
          <div
          
            
            key={index}
            className="aspect-square bg-no-repeat bg-cover  rounded-lg relative cursor-pointer group origin-center z-10 gap-x-10 "
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7
            "
            >
              <div>
                <h2 className="font-semibold">Project Title</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-black group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:1.1,duration:1}} 
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20  hover:bg-lightHover duration-500 dark:text-white dark:border-white  dark:hover:bg-darkHover "
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
          alt="rightarrow  "
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
