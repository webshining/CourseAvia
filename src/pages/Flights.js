import React, {useContext} from 'react';
import '../styles/flights.scss'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import FlightRow from "../components/FlightRow";

const Flights = observer(() => {
    const {flights} = useContext(Context).flights
    return (
        <div className="flights">
            <div className="content">
                <div className="flights_head">
                    <div className="flights_row">
                        <span>Номер рейсу</span>
                        <span>Звідки</span>
                        <span>Куди</span>
                        <span>Час Відпр.</span>
                        <span>Час Прибут.</span>
                        <span>Тривалість</span>
                    </div>
                </div>
                <div className="flights_body">
                    {flights.map(i =>
                        <FlightRow key={i.id} {...i}/>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Flights;