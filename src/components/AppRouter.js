import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Flights from "../pages/Flights";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/flights'} element={<Flights/>}/>
        </Routes>
    );
});

export default AppRouter;