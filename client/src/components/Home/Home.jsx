import { Pagination } from "../Pagination/pagination";
import { motion } from 'framer-motion';
import Search from '../Search/search';


const containerVariants = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut"},
    },
  };

function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit"> 
            <Search />
            <Pagination />
        </motion.div>
    );
};

export default Home;