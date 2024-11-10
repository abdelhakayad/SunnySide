import React from 'react';
import { arrow } from '../assets/assets';
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Header() {
  const variants ={

    scrolldown:{
      opacity:0.5,
      y:50,
      transition: {
        duration: 2,
        repeat: Infinity,

      },
    },
  }
  return (
    <motion.section
      variants={fadeIn("right",0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true, amount:0.7}}
      className="flex flex-col items-center gap-20 h-screen text-center relative">
      <h1 className="uppercase font-fraunces font-bold tracking-[0.2em] xs:text-5xl">
        <span className="inline">We are </span>
        <span className="lg:inline xs:block ">creatives</span>
      </h1>
      <motion.img animate="scrolldown" variants={variants} className="object-contain" src={arrow} alt="Arrow" />
    </motion.section>
  );
}
