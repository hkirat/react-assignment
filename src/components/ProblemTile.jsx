import {Link} from 'react-router-dom';
const ProblemTile = (props) => {
    const {title, difficulty, acceptance, problemId} = props; 
    let acceptanceClass;
    if (difficulty === 'Hard') {
        acceptanceClass = 'high';
    } else if (difficulty === 'Medium')
        acceptanceClass = 'med';
    else{
        acceptanceClass = 'low';
    }

    return (
        <Link to={`/problem/${problemId}`}>
            <div className="problem-tile">
                    <div className="title"> {title}</div>
                    <div className={`difficulty ${acceptanceClass}`}>{difficulty}</div>
                    <div className='acceptance'>{acceptance}</div>
            </div>
        </Link>
    );
}

export default ProblemTile;