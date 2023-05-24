// import "./QuestionInfo.css"
const QuesInfo = (props) =>{
    return(
        <div className="mr-2 leading-9 text-gray-200">
            <h2 className="text-cyan-500 text-4xl font-light mb-3">{props.question.title}</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, accusantium dolores optio reprehenderit, dolor nostrum ipsum suscipit molestias atque itaque quisquam? Necessitatibus nam tempora, voluptate aspernatur hic consequatur iste perferendis!
            Deleniti illum praesentium, quasi assumenda, similique accusantium odio odit commodi natus fugiat quo voluptatibus nemo nesciunt repellat numquam facere. Nisi, iusto. Esse provident facere ipsum ad molestias atque officiis suscipit.</p>
            <p>Example 1</p>
            <div className="flex flex-col bg-[#5d6ff74d] rounded-lg [&>*]:p-4">
                <p>Input: {props.question.input}</p>
                <p>Output: {props.question.output}</p>
                <p>Explanation: {props.question.explanation}</p>
            </div>
        </div>
    )
}
export default QuesInfo