import React from 'react'
import { ServicesContent } from '../constants/ServicesContent'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Services() {
  return (
    <section className='flex w-full xl:flex-row sm:flex-col xs:flex-col xl:h-screen'>
      <motion.article
              variants={fadeIn("right",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              className='flex sm:min-h-screen xs:min-h-screen bg-cerise bg-scroll bg-cover bg-center bg-no-repeat xl:flex-1'>
            {
              ServicesContent[0].first.map((sc)=>(
                <motion.article
                  variants={fadeIn("up",0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  key={sc.id} className='flex items-center justify-end flex-col gap-7'>
                  <h1 className='text-3xl font-fraunces text-DarkdCyan font-bold'>{sc.title}</h1>
                  <p className='text-center font-barlow text-DarkdCyan font-medium w-[52%] xs:w-[70%] pb-20'>{sc.content}</p>
                </motion.article>
              ))
            }
      </motion.article>
      <motion.article
              variants={fadeIn("left",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
               className='flex sm:min-h-screen xs:min-h-screen bg-orange bg-scroll bg-cover bg-center bg-no-repeat xl:flex-1'>
            {
              ServicesContent[1].second.map((sc)=>(
                <motion.article
                  variants={fadeIn("up",0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  key={sc.id} className='flex items-center justify-end flex-col gap-7'>
                  <h1 className='text-3xl font-fraunces text-DarkdCyan font-bold'>{sc.title}</h1>
                  <p className='text-center font-barlow text-DarkdCyan font-medium w-[52%] xs:w-[70%] pb-20'>{sc.content}</p>
                </motion.article>
              ))
            }
      </motion.article>
    </section>
  )
}
