import React from 'react'
import './earth.css';
import { motion } from "framer-motion";
import { GiEarthAmerica } from 'react-icons/gi'

const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

export const Earth = () => {
    return (
    <motion.div className="about-section"       
    variants={containerVariants}
    initial="hidden"
    animate="show"
    exit="exit">
        <div className="inner-container">
            <h1>Earth <GiEarthAmerica/></h1>
                <p className="text">
                Earth (from the Latin Terra, Roman deity equivalent to Gaea, Greek goddess of femininity and fertility) 
                is a planet in the solar system that revolves around its star "the Sun" in the third innermost orbit. 
                It is the densest and the fifth largest of the eight planets in the solar system. 
                It is also the largest of the four terrestrial or rocky.<br/>
                Earth's history is more than 4.5 billion years old, 
                and there were no continents about 3.5 billion years ago. 
                The ones we have now are the result of the breakdown of what we call the supercontinent Pangea.
                <p>Today we have 6 continents: Africa,
                    America,
                    Antartica,
                    Asia,
                    Europa,
                    Oceania.
                </p>
                Apart from the continents, humans divide the Earth by countries. 
                The United Nations recognizes 193 countries globally, 
                in addition to two observer states, the Vatican and the Palestinian Authority.<br/>
                The world population has gone from almost 1 billion inhabitants in 1800 to more than 6 billion in 2000. 
                On October 30, 2011, 7 billion were reached. At the beginning of 2021, the figure was around 7.8 billion.
                Some projections estimate that the world population could reach 11.4 billion in 2050 and 15.3 billion in 2100.
                <p className='styleP'><br/>Thanks for viewing my Country App!</p>
                </p>
        </div>
    </motion.div>
    );
};