import React from 'react'
import { flogo } from '../assets/assets'
import { navList } from '../constants/NavList'
import { SocialIcons } from '../constants/scoialIcons'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Footer() {
  return (
    <footer className='bg-DarkmCyan'>
      <article className='flex flex-col gap-16 justify-center items-center pt-20'>
        <article className='flex flex-col gap-7 justify-center items-center'>
        <motion.img
              variants={fadeIn("down",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
        src={flogo} alt="" />
        <article className='flex flex-row gap-12 items-center'>
          {
            navList.map((nav)=>(
              <motion.article
                variants={fadeIn("left",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className='font-barlow' key={nav.id}>
                  <a className='cursor-pointer transition-all duration-[250ms] ease-in hover:text-white block font-medium text-DarkdCyan' href={`#${nav.id}`}>{nav.name}</a>
              </motion.article>
            ))
          }
        </article>
        </article>
        <article className='cursor-pointer flex flex-row gap-7 items-center mb-20'>
          {
            SocialIcons.map((si)=>(
              <motion.article
              variants={fadeIn("up",0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
               key={si.id} >
                <img className=' transition-all duration-[250ms] ease-in hover:opacity-70' src={si.icon} alt="" />
              </motion.article>
            ))
          }
        </article>
      </article>
    </footer>
  )
}
