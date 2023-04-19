import './problem-panel.css'


const ProblemPanel = ({ problem }) => {


    return (


        <div id='problem-panel'>
            <div className="prob-title"><h2>{problem.id}: {problem.title}</h2></div>
            <div className="prob-desc"><p>{problem.description}</p> </div>
            {
                problem.examples.map((example, index) => {

                    return (
                        <div className='example'>
                            <h3>Example {index + 1}:</h3>
                            <div className='example-container'><p><b>Input: </b>{example.input}</p>
                                <p><b>Output: </b>{example.output}</p>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProblemPanel;