import styled from "styled-components"

export default function Problem() {
    return (
        <StyledDiv>
            <div className="parentlayout">Question</div>
            <div className="parentlayout">
                <div>
                    solution
                    <pre className="code"><code id="code">{`
this is some code;
x + y = z;
function code (){
    loas.configl;
    console.lgo("hello")
}
                    `}</code></pre>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .parentlayout{
        border: 2px solid #f0f0f0;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;

        .code{
            margin: 10px;
            padding: 10px 20px;
            border: 2px solid #ecf5f5;
            border-radius: 10px;
            background-color: #f2f7f7;
        }
    }
`