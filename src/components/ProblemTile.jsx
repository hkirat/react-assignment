const ProblemTile = (props) => {
    const {title, difficulty, acceptance} = props; 
    let acceptanceClass;
    if (difficulty === 'Hard') {
        acceptanceClass = 'high';
    } else if (difficulty === 'Medium')
        acceptanceClass = 'med';
    else{
        acceptanceClass = 'low';
    }

    return (
        <div className="problem-tile">
            <div className="title"> {title}</div>
            <div className={`difficulty ${acceptanceClass}`}>{difficulty}</div>
            <div className='acceptance'>{acceptance}</div>
        </div>
    );
}

export default ProblemTile;