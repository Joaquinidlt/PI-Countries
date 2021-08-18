import { NavLink as Link } from 'react-router-dom';
import './details.css';

const Activity = ({ Activities, countryName}) => {
    if(Activities && Activities.length > 0) {
        return (
        <div className='centerformact'>
            <h3 className='centerh3act'>Activited planed in {countryName}</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Difficulty</th>
                    <th>Season</th>
                </tr>
                </thead>
                <tbody>
                    {Activities &&
                    Activities.map((a) => (
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.duration}</td>
                            <td>{a.season}</td>
                            <td>{a.difficulty}</td>
                            <td>{a.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    } else {
        return <Link className='btn-planned' to='/activity'>Create an activity !</Link>
    };
};

export default Activity;