import { Link } from "react-router-dom";

const Problem = ({ problem, bgClass, diffClass }) => {

    return (

        <div key={problem.id} className={`problem-container ${bgClass}`}>
            <div className="title"> <Link id="problem-link" to={`/${problem.id}`}><p>{problem.id}. {problem.title}</p></Link></div>
            <div className="acceptance"><p>{problem.acceptance_rate}</p></div>
            <div className="difficulty"> <p className={diffClass} >{problem.difficulty}</p> </div>
        </div >

    )
}
export default Problem;