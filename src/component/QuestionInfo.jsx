import "./QuestionInfo.css"
const QuesInfo = (props) =>{
    return(
        <div className="question--cont">
            <h2>{props.question.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, accusantium dolores optio reprehenderit, dolor nostrum ipsum suscipit molestias atque itaque quisquam? Necessitatibus nam tempora, voluptate aspernatur hic consequatur iste perferendis!
            Deleniti illum praesentium, quasi assumenda, similique accusantium odio odit commodi natus fugiat quo voluptatibus nemo nesciunt repellat numquam facere. Nisi, iusto. Esse provident facere ipsum ad molestias atque officiis suscipit.</p>
            <p>Example 1</p>
            <div className="examples">
                <p>Input: {props.question.input}</p>
                <p>Output: {props.question.output}</p>
                <p>Explanation: {props.question.explanation}</p>
            </div>
        </div>
    )
}
export default QuesInfo