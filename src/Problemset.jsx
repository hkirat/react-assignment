import styled from "styled-components";

/*
 * Temporary problems array schema
 */
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
}];

export default function Problemset() {
    return (
        <StyledDiv>
            <div>
                <table>
                    <tr>
                        <th>Problem Title</th>
                        <th>Difficulty Level</th>
                        <th>Acceptance Rate</th>
                    </tr>
                    {
                        problems.map(ele => {
                            return (
                                <tr>
                                    <td>{ele.title}</td>
                                    {getdifficultyColor(ele.difficulty.toLocaleLowerCase(), "td")}
                                    <td>{ele.acceptance}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </StyledDiv>
    )
}

function getdifficultyColor(levelString, EleString) {
    switch (levelString) {
        case "easy":
            return(
                <EleString style={{color: "green"}}>
                    {levelString.toLocaleUpperCase()}
                </EleString>
            )
            break;
        case "medium":
            return(
                <EleString style={{color: "orange"}}>
                    {levelString.toLocaleUpperCase()}
                </EleString>
            )
            break;
        case "hard":
            return(
                <EleString style={{color: "red"}}>
                    {levelString.toLocaleUpperCase()}
                </EleString>
            )
            break;

        default:
            break;
    }
}

const StyledDiv = styled.div`
    table{
        width: 100%;
        border-collapse: collapse;
        th{
            text-align:left;
            font-size: larger;
            padding: 10px;
        }
        tr{
            font-size: medium;
            &:nth-child(2n){
                background-color: #f2f7f7;
            }
            td{
                padding: 10px;
            }
        }
    }
`