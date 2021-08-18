import React from 'react';
import {GiMountainRoad, GiTreasureMap, GiBoatFishing, GiSailboat} from 'react-icons/gi';
import {FaUmbrellaBeach} from 'react-icons/fa';
//import {FaUmbrellaBeach} from 'react-icons/';
import './activities.css';
const icons = <h2><GiMountainRoad/><FaUmbrellaBeach/><GiTreasureMap/><GiBoatFishing/><GiSailboat/></h2>

export default function CardActivities ({name, difficulty, duration, season }) {
    return (
        <div className="cardAct">
            <div className="card">
                <h2 className="cardH2">{icons}</h2>
                <h1 className="cardH1">{name}</h1>
                <h3>{'Difficulty: '+difficulty}</h3>
                <h3>{'Duration: '+duration+ ' days'}</h3>
                <h3>{'Season: '+season}</h3>
            </div>
        </div>
    );
}


