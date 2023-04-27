import React, { useState, useMemo } from 'react'
import problems from "../../data.json"
import './problems.css'
import Problem from './problem'
import Pagination from './pagination'




const Problems = () => {
    // const PageSize = 10;
    const [PageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return problems.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize]);

    function handlePageSizeChange(event) {
        const newPageSize = parseInt(event.target.value);
        const newPageCount = Math.ceil(problems.length / newPageSize);
        const newCurrentPage = Math.min(currentPage, newPageCount); // make sure current page is within the new page count
        setPageSize(newPageSize);
        setCurrentPage(newCurrentPage);
    }

    return (
        <div id='problems'>
            <div className="problems-header">
                <div className="title"><p>Title</p></div>
                <div className="acceptance"><p>Acceptance</p></div>
                <div className="difficulty"><p>Difficulty</p></div>
            </div>

            {
                currentTableData.map((problem, index) => {

                    const isEven = index % 2 === 0;
                    const bgClass = isEven ? 'even' : 'odd';
                    let diff = problem.difficulty;
                    let diffClass;
                    if (diff === "Hard") diffClass = "red";
                    else if (diff === "Medium") diffClass = "yellow"
                    else diffClass = "green"
                    return (

                        <Problem problem={problem} key={problem.id} bgClass={bgClass} diffClass={diffClass} />

                    )

                })
            }
            <div className='pagination-box'>
                <div className='pagination-limit'>

                    <select name="pageSize" id="pageSize" value={PageSize} onChange={handlePageSizeChange} >
                        <option value={5}>5 / page</option>
                        <option defaultValue value={10}>10 / page</option>
                        <option value={20}>20 / page</option>

                    </select>
                </div>
                <div className="pagination-buttons">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={problems.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>


            </div>


        </div>
    )
}


export default Problems;