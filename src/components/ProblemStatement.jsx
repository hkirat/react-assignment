
import React from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';


// A demo component
export default function ProblemStatement(props) {
    let { problems } = props;
    const { id } = useParams();
    if (id) {
        problems = problems.filter(p => p.id == id);
    }
    return (
        <div className="grid h-screen place-items-center">
        <table className="shadow-lg bg-white border-collapse">
            <thead><tr>
                <th className="bg-blue-100 border text-left px-8 py-4">Title</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Acceptance</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Difficulty</th>
            </tr>
            </thead>
            <tbody>
                {
                    problems.map((p) => {
                        return (
                            <tr className='border px-8 py-4' key={`problemset_tr_${p.id}`}>
                                <td>
                                    {p.title}
                                </td>
                                <td>
                                    {p.acceptance}
                                </td>
                                <td>
                                    {p.difficulty}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )

}