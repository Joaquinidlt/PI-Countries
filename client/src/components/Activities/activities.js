import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivity, byOrder, byDifficulty, bySeason } from '../../reducer/actions';
import { Link } from "react-router-dom";
import Pagination2 from './paginationAct';
import CardActivities from "./cardActivities.js";
import { motion } from 'framer-motion';
import {IoCreateOutline} from 'react-icons/io5';
import {GrPowerReset} from 'react-icons/gr';

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

export default function Activities() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activitiesAll);
    const [currentPage, setCurrentPage] = useState(1);
    const [activityPerPage, setActivityPerPage] = useState(6);
    const [order, setOrder] = useState('');
    const indexOfLastActivity = currentPage * activityPerPage // 6
    const indexOfFirstActivity = indexOfLastActivity - activityPerPage // 0
    const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity) // slice agarra un arreglo y agarra una porcion por los parametros que yo le paso

    const pagination2 = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAllActivity())
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllActivity());
    }
    function handleDifficulty(e){
        dispatch(byDifficulty(e.target.value))
    };
    function handleSeason(e){
        dispatch(bySeason(e.target.value))
    };
    function handleOrder(e){
        e.preventDefault();
        dispatch(byOrder(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    };
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit"> 
            <div >
                <div className="links"><Link to= '/activity'><h2>Create Activity <IoCreateOutline/></h2></Link></div>
                <button className="btnA" onClick={e => {handleClick(e)}}><h2>Reset Activities <GrPowerReset/></h2></button>
            </div>
            <div >
                <div className="content-select">
                    <select onChange={e => handleOrder(e)} >
                        <option value='Asc'>Ascendente</option>
                        <option value='desc'>Descendente</option>
                    </select>
                    <select onChange={e => handleDifficulty(e)}>
                        <option value='___'>Difficulty:</option>
                        <option value='___'>All</option>
                        <option value='Very Easy'>Very easy</option>
                        <option value='Easy'>Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Very Difficult">VeryDifficult</option>
                    </select>
                    <select onChange={e => handleSeason(e)}>
                        <option value='___'>Season:</option>
                        <option value='___'>All</option>
                        <option value='Summer'>Summer</option>
                        <option value='Fall'>Fall</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>
                <div>
                    <Pagination2
                        activityPerPage={activityPerPage}
                        activities={activities.length}
                        pagination2= {pagination2}
                    />
                </div>
                
                <div className='wrapper-flexA'>
                {
                    currentActivities?.map(el => {
                        return (
                            <fragment>
                                <CardActivities 
                                name={el.name}  
                                difficulty={el.difficulty} 
                                duration={el.duration}
                                season={el.season}
                                key={el.id}/>
                            </fragment>
                        );
                    })
                }
                </div>
            </div>
        </motion.div>
    )

};
