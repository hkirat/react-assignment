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
            <tr key={problemId} onClick={()=>{
                console.log('clicked row', problemId)
                window.location.href = `/problem/${problemId}`;
            }}>
                <td>{title}</td>
                <td className={`${acceptanceClass}`}>{difficulty}</td>
                <td >{acceptance}</td>
            </tr>
    );
}

export default ProblemTile;