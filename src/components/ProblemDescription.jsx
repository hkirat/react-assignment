import React from 'react';
import "../assets/Problems.css";
import { useParams } from 'react-router-dom';
 import problems from "../questions";
import { useLocation } from 'react-router-dom';
import "../assets/ProblemDescription.css"

function ProblemDescription() {





const { id } = useParams();
  const problem = problems.find((prob) => prob.id === id);

  return (
    <section className="problem--description">
  
        <div id="container">
            <div className="left-half" id="left">

                <section className="desc">

                    <h1>
                        {problem.title}
                    </h1>
                    <p>Difficulty:
                       {problem.difficulty}
                    </p>
                    <p>
                        {problem.description}
                    </p>
                  
                </section>
            </div>
            <div className="right-half" id="right">
               
                        <section>
                            <h2>Answer</h2>
                            <form className="answer" method="post" action="/answers/<%= encodeURIComponent(question.title) %>">
                                <label htmlFor="answer">Answer:</label>
                                <textarea id="answer" name="answer"></textarea>
                                <button type="submit">Submit</button>
                            </form>

                        </section>
            </div>
        </div>




    </section>

  );
}

export default ProblemDescription;
