import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const FlightRow = observer((props) => {
    const {setFlights} = useContext(Context).flights
    const onChangeHandler = (e) => {
        setFlights(e.target.id, e.target.name, e.target.value)
    }
    return (
        <div className="flights_row">
            <span><input id={props.id} name="id" type="text" value={props.id} readOnly/></span>
            <span><input id={props.id} name="from" type="text" value={props.from} onChange={e => onChangeHandler(e)} /></span>
            <span><input id={props.id} name="to" type="text" value={props.to} onChange={e => onChangeHandler(e)} /></span>
            <span><input id={props.id} name="time_start" type="time" value={props.time_start} onChange={e => onChangeHandler(e)} /></span>
            <span><input id={props.id} name="time_end" type="time" value={props.time_end} onChange={e => onChangeHandler(e)} /></span>
            <span><input id={props.id} name="time" type="number" value={props.time} onChange={e => onChangeHandler(e)} /></span>
            <div className="flights_row-btns">
                <div className="flights_row-btn material-symbols-rounded">edit</div>
                <div className="flights_row-btn material-symbols-rounded">delete</div>
            </div>
        </div>
    );
});

export default FlightRow;