import { Component } from "react";
// import axios from 'axios';


import ('../Styles/home.css');


class Question extends Component{
    constructor(){
        super();
        this.state={
            questions:[{ }] ,
            detailsmodal:false
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
        // axios.get(
        //     "http://localhost:5402/question"    

        // ).then(result =>{
        //     this.setState({
        //         questions:result.data.questions
        //     })
        //     console.log(result.data.questions);
        // }).catch(error=>{
        //     console.log(error);
        // }

        // )
        this.setState({
                    questions:this.props.questions
                })
    }



    render(){
        
       

        const {questions}=this.state;
        return(
            <>

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
                                <tr key={index}>
                         <td><input type="checkbox"/></td>         
                        <td>{item.question_no}</td>
                        <td title={item.question}>{item.question_title}</td>
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
                <button className="paginationbtn">-</button>
                <button className="paginationbtn">1</button>
                <button className="paginationbtn">2</button>
                <button className="paginationbtn">3</button>
                <button className="paginationbtn">+</button>
            </div>

           
            </>
            :
            <>
                <h5 className="my-5 text-danger">You need to login first to solve the questions</h5>
            </>


            </>
        )
    }
}

export default Question;