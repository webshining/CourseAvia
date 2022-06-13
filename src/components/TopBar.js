import React from 'react';
import '../styles/topbar.scss'
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar_logo"><Link to="/">WSHAvia</Link></div>
            <div className="topbar_source">
                <a href="https://github.com/webshining"><i className='bx bxl-github'></i></a>
            </div>
        </div>
    );
};

export default TopBar;