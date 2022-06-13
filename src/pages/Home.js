import React from 'react';
import '../styles/home.scss'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_logo">Авиарейсы только ТУТ</div>
            <div className="home_btns">
                <Link to="/flights" className="home_btn btn">Список рейсов</Link>
            </div>
        </div>
    );
};

export default Home;