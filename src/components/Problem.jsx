import {useParams} from "react-router-dom";


const problems =
    [
        {
            id:'201',
            title: " Bitwise AND of Numbers Range",
            Description:"Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
            difficulty: "Medium",
            acceptance: "42%"
        },
        {
            id:'202',
            title: "Happy Number",
            Description:"Write an algorithm to determine if a number n is happy.\n" +
                "\n" +
                "A happy number is a number defined by the following process:\n" +
                "\n" +
                "Starting with any positive integer, replace the number by the sum of the squares of its digits.\n" +
                "Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n" +
                "Those numbers for which this process ends in 1 are happy.\n" +
                "Return true if n is a happy number, and false if not.",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id:'203',
            title: "Remove Linked List Elements",
            Description: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
            difficulty: "Hard",

            acceptance: "42%"
        }
    ];
function Problem() {
    const {id} = useParams();
    let probId = id;
    let title;
    let acceptance;
    let difficulty;
    let description;
    for(let i = 0; i <problems.length; i++) {
        if(problems[i].id === probId) {
            acceptance = problems[i].acceptance;
            difficulty = problems[i].difficulty;
            title = problems[i].title;
            description = problems[i].Description;
        }
    }
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-6">
                        <h5>Problem {id} : {title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="col-6" >
                        <input type="text" style={{background: 'grey', width:'100%', height:'600px'}} ></input>
                        <button type="button" className="btn btn-warning" style={{margin:'20px', padding:'10px'}}>Test Code</button>
                        <button type="button" className="btn btn-success" style={{margin:'20px', padding:'10px'}}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Problem;