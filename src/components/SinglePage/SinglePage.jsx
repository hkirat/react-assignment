import { useParams } from 'react-router-dom';
import './SinglePage.css'

const SinglePage=(props)=>{

    const {id}=useParams();

    const found =props.problems.find((prob)=>{
        return prob.title===id;
    })

    return (
        <>

        {found ?(
        <div className="problem">
            <div className="question">
                <h1>{found.title}</h1>
                <h3>Description</h3>
                <p>{found.description}</p>
                <h3>Input :</h3>
                <p>{found.exampleIn}</p>
                <h3>Output:</h3>
                <p>{found.exampleOut}</p>
            </div>
            <div className="solution">
                <h1>Code Here</h1>
                <textarea name="" id="" cols="100" rows="30"></textarea>
                <br />
                <button>submit</button>
                <button>run</button>
            </div>
        </div>
        ):(
            <div>
                <h1>The Searched Question doesnt exist !</h1>
            </div>
        )}

        </>

    )
}

export default SinglePage;