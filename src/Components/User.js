import React, { Component } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
 import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ('../Styles/logintabs.css')


class Home extends Component{

  
    render(){
        return(
            <>
            <div className="navbar">
               <img className="logoimg" src={require('../Photos/one.gif')} alt="trycode"  ></img>
                <div>TryCode <span className="exl">!</span></div>
            </div>
            <div className="maindiv">
             <Tabs >
                    <TabList className="logintab" >
                    <Tab><h3>Login</h3></Tab>
                    <Tab><h3>SignUp</h3></Tab>
                    </TabList>
                    <div className="maintab">
                    <TabPanel className="panel">
                    <div className="divs"><Login/></div>
                    </TabPanel>
                    <TabPanel  className="panel" >
                    <div className="divs"><SignUp/></div>
                    </TabPanel>
                    </div>
            </Tabs>
            </div>
            
            {/* <span><SignUp/></span> */}
            </>
        )
    }
}

export default Home;