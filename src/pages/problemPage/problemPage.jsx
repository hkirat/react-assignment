import CodeEditor from "../../components/codeEditor/codeEditor";
import ProblemPanel from "../../components/problem-panel/problem-panel";
import './problemPage.css'
import { useParams } from "react-router-dom";
import problems from '../../data.json'

function ProblemPage() {
    const { id } = useParams();
    const problem = problems.find(problem => problem.id == id)
    return (
        <div id="problemPage">
            <ProblemPanel problem={problem} />
            <CodeEditor problem={problem} />
        </div >
    )
}
export default ProblemPage;