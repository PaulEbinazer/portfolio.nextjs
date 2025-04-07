import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Contacts = ({isDarkMode}) => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9941391c-7b08-4de0-bc7b-527be19789b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:1}}
      
      className="text-center mb-2 text-lg font-Ovo">Connect With Me</motion.h4>
      <motion.h2 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.5,duration:1}}

       className="text-center text-5xl font-Ovo">Get In Touch</motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.3,duration:1}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam
        accusantium maiores facilis dolor animi velit veritatis obcaecati ab,
        minima quasi eveniet amet! Ratione, placeat?
      </motion.p>
      <motion.form 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9,duration:0.5}}
       onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <motion.input 
            initial={{x:-20,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:1.3,duration:0.7}}
             type="text" name='name' placeholder="Enter Your Name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
             dark:bg-darkHover/30 dark:border-white/90"/>
            
            <motion.input 
            initial={{x:-50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.8,duration:0.7}} type="email" name="email" placeholder="Enter Your Email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"/>
        </div>
        <motion.textarea 
          
         initial={{y:-20,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{delay:1.1,duration:0.6}}
        
        name="message" id="" rows="6" placeholder="Enter Your Meassage" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"></motion.textarea>
        <motion.button 
        
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:1.3,duration:1}} className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover " type="submit">Submit Now <Image src={isDarkMode?assets.right_arrow_white: assets.right_arrow} alt="" className="w-4"/> </motion.button>
        <p className="mt-4">{result}</p>
        
      </motion.form>

    </motion.div>
  );
};

export default Contacts;
