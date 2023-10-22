import { Component } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import ('../Styles/details.css');


class Detailcomponent extends Component{

    diff =(dificulty)=>{
        const diff=dificulty;
        if(diff ==='1'){
            return<>
            <span><div className="circlegreen circle"></div> 
           <div className=" circle"></div> 
           <div className=" circle"></div> </span>
           </>
        }else if(diff==='2'){
            return<>
            <span><div className=" circle"></div>
           <div className="circleyellow circle"></div> 
           <div className=" circle"></div> </span>
           </>
        }else if(diff ==='3'){
            return<>
            <span><div className=" circle"></div> 
           <div className=" circle"></div>
           <div className="circlered circle"></div></span> 
           </>
        }
    }

    constructor(){
        super();
        this.state={
            question:[],
            ans:'',
            language:'',
            snippet:' Please Select language to start coding'
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:5402/question/${this.props.qno.qno}`)
        .then(result=>{this.setState({question:result.data.questions[0]})})
        .catch(error=>{console.log(error)})
    }

    languageselector(lang){
        this.setState({
            language:lang
        })
        // console.log(lang)
        switch (lang) {
                 case 'Java':
                this.setState({
                    snippet: `public class revarray{
                        public static void main(String[] args){

                        }
                    } `
                })
                break;
                case 'JavaScript':
                    this.setState({
                        snippet:'JavaScript Code '
                    })
                
                break;
            
                case 'Python':
                    this.setState({
                        snippet:'Python Code  '
                    })
                break;


                case'C++':
                this.setState({
                    snippet:'C++ Code  '
                })
                break;
        
            default:
                break;
        }
    }

    renderans=(value)=>{
            this.setState({
                snippet:value
            })

    }


render(){
    const {question}=this.state
    const {snippet}=this.state
    // console.log(this.state.question)
    return(
        
        localStorage.getItem('islogedin')
        ?
        <>
            <Navbar/>

            <div className="container my-2">
                <div className="row">
                    <div className="col-6 detailspageleftsection">
                        <div className="detailspagequestionsection">
                        <div className="difficultydiv mt-3"><span title="Difficulty Level" className="difficulty">{this.diff(question.difficulty)}</span></div>
                            <b>Question: </b><span>{question.question_title}</span>
                            <p></p>  
                            <p><b>explinations :</b>{question.question}</p>
                            <p><b>Examples</b></p>
                            {/* <p>Test Conditions</p> */}
                            {console.log(question.examples)}
                            
                               <p>{JSON.stringify(question.examples)}</p>
                            
                            
                            <div className="sharebtns">
                                    Share this:
                                    <img className="shareimg" src={require('../Photos/git.png')} alt=""/>
                                    <img className="shareimg" src={require('../Photos/link.jpeg')} alt=""/>
                                    <img className="shareimg" src={require('../Photos/twi.jpeg')} alt=""/>


                            </div>

                        </div>
                    </div>




                    <div className="col-6 detailspageleftsection">
                        <div className="detailspageansersection">
                            <label>Select Language :-</label>
                            <select className="mt-4 languagedropdown" onChange={(event)=>{this.languageselector(event.target.value)}}>
                                 <option value={''} >Select </option>
                                <option value={'Java'} >Java</option>
                                <option value={'JavaScript'}>JavaScript</option>
                                <option value={'Python'}>Python</option>
                                <option value={'C++'}>C++</option>

                            </select><hr/>

                            {/* <input type="textbox" className="textbox" placeholder="Type your Solutions here"/> */}
                            <textarea className="textbox" placeholder= {"write your "+this.state.language+" code here"} value={snippet} onChange={(event)=>this.renderans(event.target.value)}></textarea>
                            <div className="btnsections">
                                <button className="submissionbtn">Testcases </button><button className="submissionbtn" onClick={console.log(this.state.snippet)}>Run</button><button className="submissionbtn">Submit</button>
                            </div>
                        </div>
                    </div>

                 </div>
            </div>
        </>
        :<>
            <Navbar/>
            <div className="my-5 mx-5 text-danger " > <h1>Login to Start Coding!!</h1></div>
        </>
    )
}
}

const Detail=()=>{
const params=useParams('qno')
return <Detailcomponent qno={params} ></Detailcomponent>
}

export default Detail;
