import React from 'react'
import { TestimonialsContent } from '../constants/TestimonialsContent'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'


export default function Testimonials() {
  return (
    <section className='flex xl:h-screen flex-col justify-center items-center gap-20 sm:py-10 xs:py-12 '>
      <motion.h1
              variants={fadeIn("up",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              className='uppercase font-fraunces font-bold text-xl text-GrayishBlue tracking-[0.3rem]'>Client Testimonials</motion.h1>
      <article className='grid xl:grid-flow-col sm:grid-flow-row xl:grid-cols-3 sm:grid-cols-1 sm:gap-16 xs:gap-16'>
        {
          TestimonialsContent.map((tc)=>(
            <motion.article
              variants={fadeIn("right",0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              key={tc.id} className='flex justify-center items-center flex-col xl:gap-10 sm:gap-6 xs:gap-6'>
              <img src={tc.img} className='w-12 rounded-full' />
              <p className='font-barlow font-medium text-center  text-VDGBlue xl:w-[70%] sm:w-[44%] xs:w-[61%]'>{tc.content}</p>
              <article className='flex flex-col items-center'>
                <h1 className='font-fraunces font-bold text-lg text-VDDBlue capitalize'>{tc.name}</h1>
                <h2 className='font-barlow font-medium text-GrayishBlue'>{tc.position}</h2>
              </article>

            </motion.article>
          ))
        }
      </article>
    </section>
  )
}
