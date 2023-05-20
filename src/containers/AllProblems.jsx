import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../Layout/Layout.jsx';
import { problems1, problems2 } from '../constants/Questions.jsx';



const AllProblems = () => {
    const [problems, setProblem] = useState(problems1);


    return (
        <Layout>
            <div className="center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Acceptance</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            problems.map(problem => {
                                return (<tr key={problem.id}>

                                    <td><Link to="/problem/:${problem.id}" state={problem}>
                                        {problem.title}
                                    </Link>
                                    </td>
                                    <td>
                                        {
                                            problem.difficulty
                                        }
                                    </td>
                                    <td>
                                        {
                                            problem.acceptance
                                        }
                                    </td>
                                    <td>
                                        <meter value={problem.staus} max={100}> </meter>
                                    </td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
                <nav>
                    <ul className="pagination justify-content-end">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous"
                                onClick={() => setProblem(problems1)}
                            >
                                <span aria-hidden="true" >&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setProblem(problems1)}>1</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setProblem(problems2)}>2</button>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#"
                                aria-label="Next"
                                onClick={() => setProblem(problems2)}
                            >
                                <span aria-hidden="true"
                                >&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Layout>
    );
}

export default AllProblems;
