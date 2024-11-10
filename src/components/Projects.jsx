import React from 'react'
import { ProjectsGallery } from '../constants/ProjectsGallery'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Projects() {
  return (
    <section className='xl:flex sm:grid xs:grid xl:flex-row sm:grid-flow-col sm:grid-rows-2 xs:grid-flow-col xs:grid-rows-2 '>
      {
        ProjectsGallery.map((pg)=>(
          <motion.picture
            variants={fadeIn("left",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}}
            key={pg.id} className=''>
            <source media='(min-width: 600px)' srcSet={pg.desktop} />
            <img src={pg.mob} alt="" />
          </motion.picture>
        ))
      }
    </section>
  )
}
