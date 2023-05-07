const ProblemDescription = (props) => {
    let { title, description, examples, constraints='' } = props.problem;
    console.log(title, description, examples, constraints)
    return (
        <div className="problem-area">
            <h2>{title}</h2>
            <div className='description'>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
            <div className='descitption'>
                <h3>Examples</h3>
                <div>{examples}</div>
            </div>
            <div className='descitption'>
                <h3>Constraints</h3>
                <div>{constraints}</div>
            </div>
            
            
            
            
        </div>
    );
}

export default ProblemDescription;