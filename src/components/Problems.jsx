
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
{
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
},{
    title: "203. Two SUm",
    difficulty: "Easy",
    acceptance: "51.9%"
},{
    title: "204. Integer to roman",
    difficulty: "Easy",
    acceptance: "94.9%"
},];



function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    function setDifficultyColor(){
        if(difficulty=='Hard'){
            return 'text-red-800'
        }
        else if(difficulty=='Medium') return 'text-amber-600'
        else return 'text-lime-500'
    }

    return <tr className="border-b-2 border-slate-500 h-14 hover:bg-slate-200">
        <td className="px-14">
            {title}
        </td>
        {/* <hr > */}
        <td className="px-14">
            {acceptance}
        </td>
        <td className={`${setDifficultyColor()} px-14`} >
            {difficulty}
        </td>
    </tr>
}

const Problems = ()=>{
    return(
        <div className="p-4 ">
            <h1 className="text-2xl justify-center flex">Problems</h1>
            <div className="p-6 text-lg">
                <table>
                    {problems.map((e)=> ProblemStatement(e))}
                </table>
            </div>
        </div>
    )
}

export default Problems