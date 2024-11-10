import React from 'react'
import { AboutContent } from '../constants/AboutContent'
import { cup, egg, mcup, megg } from '../assets/assets'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function About() {

  return (
    <section className=' flex flex-col bg-white font-fraunces'>

      <article className='flex xl:flex-row sm:flex-col-reverse xs:flex-col-reverse '>
        {
          AboutContent[0].first.map((abt)=>(
            <motion.article
              variants={fadeIn("right",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              id={abt.id} className=' flex xl:h-auto sm:h-screen xs:h-screen flex-col justify-center items-center gap-7 xl:flex-1 '>

                <h1 className='text-VDDBlue xl:text-start sm:text-center xs:text-center font-bold xl:text-3xl sm:text-4xl xs:text-4xl w-80'>{abt.title}</h1>
                <p className='xl:pl-20 xl:text-start sm:text-center xs:text-center xs:text-lg font-barlow font-medium text-DGBlue xl:w-[72%] sm:w-[45%] xs:w-[67%] '>{abt.content}</p>
                <button className='xl:mr-56 text-VDDBlue text-sm font-bold '>
                  <a href="#" className='block '>
                      {abt.button}
                  </a>
                </button>
            </motion.article>
          ))

        }

        <motion.article
          variants={fadeIn("left",0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount:0.7}}
          className='flex-1'>
          <picture className='w-full'>
            <source media='(min-width: 600px)' srcSet={egg} />
            <img src={megg} alt="" />
          </picture>
        </motion.article>

      </article>

      <article className='flex xl:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse '>
        {
          AboutContent[1].second.map((abt)=>(
            <motion.article
              variants={fadeIn("left",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              id={abt.id} className=' flex xl:h-auto sm:h-screen xs:h-screen flex-col justify-center items-center gap-7 xl:flex-1 '>

                <h1 className='text-VDDBlue xl:text-start sm:text-center xs:text-center font-bold xl:text-3xl sm:text-4xl xs:text-4xl w-80'>{abt.title}</h1>
                <p className='xl:pl-20 xl:text-start sm:text-center xs:text-center xs:text-lg font-barlow font-medium text-DGBlue xl:w-[72%] sm:w-[45%] xs:w-[67%] '>{abt.content}</p>
                <button className='xl:mr-56 text-VDDBlue text-sm font-bold '>
                  <a href="#" className='block '>
                      {abt.button}
                  </a>
                </button>
            </motion.article>
          ))

        }

        <motion.article
            variants={fadeIn("right",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}} className='flex-1'>
            <picture className=''>
              <source media='(min-width: 600px)' srcSet={cup} />
              <img src={mcup} alt="" />
            </picture>
        </motion.article>

      </article>
    </section>
  )
}
