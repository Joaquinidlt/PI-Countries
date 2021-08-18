import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { GiEarthAmerica } from 'react-icons/gi';
import './Landing.css';

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

const Landing = () => {
    return (
        <motion.div
        className="about-sectionL" 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit">
        <div className="info1">
            <h1><GiEarthAmerica/> Country App <GiEarthAmerica/></h1>
            <p className="textL">
                This is a country app,
                where you can search different countries,
                see the information of each one of them and
                You can also create activities for these countries.
                I hope you like it and enjoy it!!!
            </p>
            <p className='styleL'>¡Thanks for your time!</p>
            <Link className='start' to="/home">Start!</Link>
        </div>
        </motion.div>
    );
};  

export default Landing;