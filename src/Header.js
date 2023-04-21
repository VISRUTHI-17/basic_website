import React from "react";
import './Header.css';
import { HiUser } from 'react-icons/hi';
import { HiShoppingBag } from 'react-icons/hi';


const Header = ()=>{
    return(
        <div className="header-main">
            <div>
                <ul className="ul-list">
                    <li className="sneaker-li">Snkrs-</li>
                    <li className="home-li">Home</li>
                    <li>Catalog</li>
                    <li>Prices</li>
                    <li>Orders</li>
                    <li className="name-li"><HiUser style={{fontSize:"1em"}}/>Visruthi N</li>
                    <li><HiShoppingBag style={{fontSize:"1.5em"}}/></li>
                </ul>
            </div>
                

            
        </div>
    );
}

export default Header;