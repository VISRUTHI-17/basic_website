import React from "react";
import './Navigation.css';
import { SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import { SiPuma } from 'react-icons/si';



const Navigation = ()=>{
    return(
        <div className="navigation-main-div">
    
            <SiNike style={{height:"40px",width:"40px"}}/>
            <CgAdidas style={{height:"50px",width:"50px",marginTop:"30px"}}/>
            <SiPuma style={{height:"50px",width:"50px",marginTop:"30px"}}/>
        
        </div>
    );
}

export default Navigation;