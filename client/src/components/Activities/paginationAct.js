import React from 'react';
import './activities.css';

export default function Pagination2 ({activityPerPage, activities, pagination2}){
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(activities/activityPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className='paginations'  >
                { pageNumbers && 
                    pageNumbers.map(number =>(
                    <li className='number'key={number}>
                        <a onClick={() => pagination2(number)}>{number}</a>                        
                    </li>
                ))}
            </ul>
        </div>
    )
};