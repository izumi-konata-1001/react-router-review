import './css/UniversitySquare.css';
import { useNavigate } from 'react-router-dom';

function UniversitySquare()
{
    const navigate = useNavigate();
    const handleClick = function click()
    {
        navigate('/course_list');
    }
    return(
    <div className="UniversitiesContainer" onClick={handleClick}>
        <img src="/example-uni.png" className="UniIcon" alt="University Icon"/>
        <p className="UniName">University of Auckland</p>
      </div>
    );
}

export default UniversitySquare;