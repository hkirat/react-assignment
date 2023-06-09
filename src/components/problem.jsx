import languages from "../languages.js";

function Problem(props) {
    console.log("Inside problem")

    function renderExamples() {
        return (
            <div>
                {
                    props.examples.map((example, idx) => {
                        return (
                            <div key={idx}>
                                {`Example${idx + 1}:`}
                                <br/>
                                {`Input: ${example.input}`}
                                <br/>
                                {`Output: ${example.output}`}
                                <br/>
                                {example.explanation !== undefined ? `Explanation: ${example.explanation}` : null}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    function renderConstraints() {
        return (
            <div>
                Constraints:
                <ul>
                {props.constraints.map((constraint, idx) => {
                    return (
                        <li key={idx}>{constraint}</li>
                    )
                })}
                </ul>
            </div>
        )
    }

    function renderLanguageSelection() {
        console.log("languages", languages)
        return (
            <div>
                <select>
                {languages.map(language => {
                    function getLanguageInTitleCase(name) {
                        return name.replace(
                            /\w\S*/g,
                            function(txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                            }
                        );
                    }

                    return (
                        <option key={language.id} value={language.name}>{getLanguageInTitleCase(language.name)}</option>
                    )
                })}
                </select>
            </div>
        )
    }

    return(
        <div className="problem">
            <div className="problem-details">
                <h2>{`${props.id}. ${props.title}`}</h2>
                <span className={"problem-level " + props.difficulty.toLowerCase()}>{props.difficulty}</span>
                <span>{`Accepted: ${props.accepted}`}</span>
                <span>{`Submitted: ${props.submitted}`}</span>
                <span>{`Acceptance Rate: ${Math.round(props.accepted / props.submitted * 100)}`}%</span>
                <p>
                    {props.description}
                </p>
                {renderExamples()}
                {renderConstraints()}
            </div>
            <div className="playground">
                {renderLanguageSelection()}
                <textarea name="Text1" cols="40" rows="5"/>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Problem