import React from "react";
import './MainPage.css';

const MainPage = ()=>{
    return(
        <div className="mainpage-div">
            <div className="left-mainpage-div">
                <h1 style={{fontWeight:"bolder",fontSize:"40px"}}>Nike Roshe</h1>
                <h1 style={{fontWeight:"bolder",fontSize:"40px"}}>Run 2019</h1>
                <p style={{paddingTop:"50px",color:"grey"}}>Best Sneakers 2018</p>
                <p style={{color:"grey"}}>Summer</p>
                <h1 style={{paddingTop:"20px",color:"#e5b452"}}>$129</h1>
                <p style={{color:"#e5b452"}}>Exclude Shipping Cost</p>
                <div className="button-div">
                    <p>Add to bag</p>
                </div>
                
            </div>
            <div className="right-mainpage-div">

            </div>

        </div>
    );
}


export default MainPage;