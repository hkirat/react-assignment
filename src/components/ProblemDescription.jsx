const ProblemDescription = (props) => {
    let { title, description, examples, constraints='' } = props.problem;
    console.log(title, description, examples, constraints)
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{examples}</div>
            <div>{constraints}</div>
        </div>
    );
}

export default ProblemDescription;