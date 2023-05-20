import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const launguages = [
    {
        key: 0,
        language: "JavaScript",
        "code": "// start code\n\nfunction twoSum() {\n    \ console.log('Hello, world!')\;\n    }"
    },
    {
        key: 1,
        language: "C++",
        "code": "// start code\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, world!\";\n    return 0;\n}"
    },
    {
        key: 2,
        language: "Python",
        "code": "# start code\nprint(\"Hello, world!\")"
    },
    {
        key: 3,
        language: "Java",
        "code": "// start code\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n    }\n}"
    },
    {
        key: 4,
        language: "C",
        "code": "// start code\n#include <stdio.h>\n\nint main() {\n    printf(\"Hello, world!\\n\");\n    return 0;\n}"
    }
]

const Problem = () => {
    const [rows, setRows] = useState(15);
    const [columns, setColumns] = useState(85);
    const location = useLocation();
    const propsData = location.state;
    const [selectedOption, setSelectedOption] = useState('JavaScript');
    const [samplecode, setSampleCode] = useState(launguages[0].code)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        launguages.map(lang => {

            if (lang.language === event.target.value) {
                return setSampleCode(lang.code);
            }

        });
    }


    const handletextchange = () => setSampleCode(event.target.value);


    return (
        <>

            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse nav-underline" id="navbarNav">

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="toscroll">
                        <div className="problem-name margin-to-problem margin-bottom">
                            <h3>{propsData.id}. {propsData.title}</h3>
                        </div>
                        <div>
                            <button className="difficulty btn btn2 btn-primary margin-to-problem margin-bottom">
                                {propsData.difficulty}
                            </button>
                        </div>
                        <div className="problem-statement margin-to-problem margin-bottom">
                            {propsData.Statement}
                        </div>
                        <br /><br />
                        <div className="examples">
                            {
                                propsData.examples.map(exam => {
                                    return (<div className="example-1 margin-to-problem">
                                        <div className="fw-bold" key={exam.key}>
                                            Example {exam.key}
                                        </div>
                                        <div className="text-example">
                                            <p><b>Input:</b> {exam.input}</p>
                                            <p><b>Output:</b> {exam.output}</p>
                                            <p><b>Explanation:</b> {exam.explanation}</p>
                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                        <div className="contraints ">
                            <div className="fw-bold">
                                Constraints
                            </div>
                            <ul>
                                <li>2&lt;=nums.length&lt;=04</li>
                                <li>Output: [0,1]</li>
                                <li>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</li>
                            </ul>
                        </div>
                        <button className="mt-5">
                            <Link to='/all-problems'>Go back to Home</Link>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-secondary">
                    <nav className="">
                        <div>
                            <select className="dropdown h5" value={selectedOption} onChange={handleOptionChange}>
                                <option value={selectedOption} key="1">{selectedOption}</option>
                                {
                                    launguages.map(lang => {
                                        return (
                                            <option value={lang.language} key={lang.key}>{lang.language}</option>)
                                    })}
                            </select>
                        </div>

                    </nav>
                    <div className="numbergrid">
                    </div>
                    <textarea className="bg-secondary-subtle" rows={rows} value={samplecode} cols={columns}
                        onChange={handletextchange}></textarea>
                    <button type="button" className="btn btn-primary to-end" onClick={() => {
                    }}>Submit
                    </button>

                    <div className="mt-3">
                        <span className="bg-dark-subtle" style={{ minheight: '10vh' }}>
                            <textarea name="Console" value={'Console'} id="" cols="85" rows="6"></textarea>

                        </span>
                    </div>

                </div >
            </div >
        </>
    );
}

export default Problem
