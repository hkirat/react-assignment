import {Component } from'react';
import Modal from 'react-modal';
import Login from "./Login";

import ('../Styles/nav.css');

var  customStyles={
    content: {
             top: '50%',
             left: '50%',
             right: 'auto',
             bottom: 'auto',
             marginRight: '-50%',
             transform: 'translate(-50%, -50%)',
             border: '2px solid rgb(114, 200, 244)',
             width: '350px',
             borderRadius: '50px'
             }
 }

 var  Xstyles={
    width:'95%',
    textAlign: 'end',
    padingRight:'20px',
    cursor: 'pointer'

 }


class Navbar extends Component{

    constructor(){
        super();
        this.state={
            detailsmodal:false
        }
    }

    logout=()=>{
        this.setState({detailsmodal:false});
        localStorage.clear('user','islogedin');
    }
 render(){
    let user=localStorage.getItem('user');
    user=JSON.parse(user);
    // console.log(user.lastname)
    return(
        <>
        
        <div className="navbar">
                <span>
                    <img className="logoimg" src={require('../Photos/one.gif')} alt="trycode"  ></img>
                     tryCode <span className="exl3">{"<"}</span><span className="exl">!</span><span className="exl3  ">{">"}</span>  
                </span>
                <span   className='accountlink' onClick={()=>this.setState({detailsmodal:true})}>

                       My Profile

                </span>
            </div>
            <Modal isOpen={this.state.detailsmodal} style={customStyles} ariaHideApp={false} >
                <div onClick={()=>this.setState({detailsmodal:false})} style={Xstyles} className='text-danger'><b>X</b></div>
                <div ><h3 >My Account</h3></div>
                
                    {
                        localStorage.getItem('islogedin')
                        ?
                        <>
                            <h5>Firstname:-{user.firstname}</h5>
                            <h5>Lastname:-{user.lastname}</h5> 
                            <h5>Email:-{user.email}</h5>
                            <br/>
                            <button onClick={()=>{this.logout()}} className='mb-3 '>Logout</button>
                        </>
                        :
                        <>
                            <span >login   </span> <span>  </span> 
                            <Login/>  

                            <hr/>
                            <span >Not a User?  <a href='/'>SignUP</a> </span>                      
                        </>

                    } 
          

             </Modal>
        </>
    )
 }
}

export default Navbar
