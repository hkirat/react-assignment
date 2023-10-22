import { Component } from "react";
import Navbar from "./Navbar";
// import Question from "./Question";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ('../Styles/home.css');




class Homecompponent extends Component{
    constructor(){
        super();
        this.state={
            questions:[],
            detailsmodal:false,
            difficulty:undefined,
            topic:''
        }
    }

    diff =(dificulty)=>{
        const diff=dificulty;
        if(diff ==='1'){
            return<>
            <td><div className="circlegreen circle"></div> 
           <div className=" circle"></div> 
           <div className=" circle"></div> </td>
           </>
        }else if(diff==='2'){
            return<>
            <td><div className=" circle"></div>
           <div className="circleyellow circle"></div> 
           <div className=" circle"></div> </td>
           </>
        }else if(diff ==='3'){
            return<>
            <td><div className=" circle"></div> 
           <div className=" circle"></div>
           <div className="circlered circle"></div></td> 
           </>
        }
    }

    componentDidMount(){
        axios.get(
            "http://localhost:5402/question"    

        ).then(result =>{
            this.setState({
                questions:result.data.questions
            })
            // console.log(result.data.questions);
        }).catch(error=>{
            console.log(error);
        }

        )
    }

    topicselecthandler=(topic)=>{
        this.setState({
            topic:topic
        }
        )
        setTimeout(() => {
            this.filter();
        }, 0)
    }

    difficultyselecthandler=(difficulty)=>{
        this.setState({
            difficulty:difficulty
        }
        )
        setTimeout(() => {
            this.filter();
        }, 0)
    }

    filter=()=>{
        const obj={
            topic:this.state.topic,
            difficulty:this.state.difficulty
        }
        axios({
            method:'POST',
            url:'http://localhost:5402/question/filter',
            headers:{"Content-Type":"application/json"},
            data:obj
        }).then(result=>{
            // console.log(result.data);
            this.setState({
                questions:result.data.questions
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {questions}=this.state;
        const user= JSON.parse(localStorage.getItem('user'));
       


        
        return(
            <>
            <Navbar/>
            <div className="container">
                <h4 className="my-4 pageheading">Enhance your cour coding skills in tryCode!</h4>
                <div className="row">
                       <div className="col-8 questionswindow">
                                <div className="row addwiindow mt-3">
                                        <div className="col-4 adds">
                                        <img className="addsimg" src={require('../Photos/add1.jpeg')} alt=""/>
                                       
                                        </div>
                                        <div className="col-4 adds">
                                        <img  className="addsimg" src={require('../Photos/add2.png')} alt=""/>

                                        </div>
                                        <div className="col-4 adds">
                                        <img className="addsimg" src={require('../Photos/add3.png')} alt=""/>

                                        </div>
                                </div>

                                <div className="Questionssection mt-5">

                                        <div className="dificultyslectionbtndiv"> Difficulty :<button className="dificultybtns btn-green" onClick={()=>{this.difficultyselecthandler(1)}}>Easy</button><button className="dificultybtns btn-yellow" onClick={()=>{this.difficultyselecthandler(2)}}>Medium</button><button className="dificultybtns btn-red" onClick={()=>{this.difficultyselecthandler(3)}}>Hard   </button> </div>

                                        <input type="text" placeholder="search" className="searchbar my-4"></input>
                                        <select className="dropdown" onChange={(event)=>this.topicselecthandler(event.target.value  )}>
                                            <option value={""}>All topics</option>
                                            <option value={"1"}>Array</option>
                                            <option value={"2"}>Switch</option>
                                            <option value={"3"}>Sum</option>
                                            <option>Binary Search</option>
                                            <option>My List</option>

                                            
                                        </select>

                                </div>

                                {/* <Question questions={this.state.questions}></Question> */}
                                <>
                                    {
                                    localStorage.getItem('islogedin')
                                    ?
                                    <>
                                    <table >
                                        <thead>
                                            <tr><th></th>
                                                <th>No:</th>
                                                <th>Title :</th>
                                                <th>Acceptence :</th>
                                                <th>Difficulty :</th>
                                                <th>todo :</th>
                                            
                                            </tr>

                                        </thead>
                                        <tbody>

                                            {
                                                questions.map((item,index)=>{
                                                    return ( 
                                                        <tr key={index}  onClick={()=>this.props.navigate(`/detail/${item.question_no}`)} >
                                                <td><input type="checkbox"/></td>         
                                                <td>{item.question_no}</td>
                                                <td title={item.question}>{item.question_title} </td>
                                                <td>{item.acceptence}</td>
                                                { this.diff(item.difficulty)      
                                                }
                                                <td>add</td>

                                            </tr>
                                                    )
                                                })
                                            }

                                            
                                    
                                        </tbody>
                                    </table>
                                    <div className="paginationbtndiv my-4">
                                        <button className="paginationbtn">←</button>
                                        <button className="paginationbtn">1</button>
                                        <button className="paginationbtn">2</button>
                                        <button className="paginationbtn">3</button>
                                        <button className="paginationbtn">→</button>
                                    </div>
                                    </>
                                    :
                                    <>
                                        <h5 className="my-5 text-danger">You need to login first to solve the questions</h5>
                                    </>}


                </>


                        </div>
                        {/*                                                                         */}
                       <div className="col-3  userwindow ">
                        <div className="userimg mt-3">
                            <img src={require('../Photos/th3.png')} alt="" ></img>
                            {localStorage.getItem('islogedin')
                                ? 
                            <h2 className="performancephoto">{user.firstname} {user.lastname}</h2>
                            :null
                            }
                            <hr/>
                            <img className="performancephoto" src={require('../Photos/problemlog.png')} alt=""></img>
                            <img className="performancephoto" src={require('../Photos/course.png')} alt=""></img>
                            
                        </div>
                       </div>


                </div>


            </div>
            </>
        )
    }
}

const Home=()=>{
    const navigate=useNavigate();
   return  <Homecompponent navigate={navigate}></Homecompponent>
}


export default Home;