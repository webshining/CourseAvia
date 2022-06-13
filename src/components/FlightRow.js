import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const FlightRow = observer((props) => {
    const [ReadOnly, setReadOnly] = useState(true)
    const {setFlights, deleteFlights} = useContext(Context).flights
    const onChangeHandler = (e) => {
        setFlights(e.target.id, e.target.name, e.target.value)
    }
    return (
        <div className="flights_row">
            <span><input readOnly={true} id={props.id} name="id" type="text" value={props.id}/></span>
            <span><input readOnly={ReadOnly} id={props.id} name="from" type="text" value={props.from} onChange={e => onChangeHandler(e)}/></span>
            <span><input readOnly={ReadOnly} id={props.id} name="to" type="text" value={props.to} onChange={e => onChangeHandler(e)}/></span>
            <span><input readOnly={ReadOnly} id={props.id} name="time_start" type="time" value={props.time_start} onChange={e => onChangeHandler(e)}/></span>
            <span><input readOnly={ReadOnly} id={props.id} name="time_end" type="time" value={props.time_end} onChange={e => onChangeHandler(e)}/></span>
            <span><input readOnly={ReadOnly} id={props.id} name="time" type="number" value={props.time} onChange={e => onChangeHandler(e)}/></span>
            <div className="flights_row-btns">
                <div className="flights_row-btn material-symbols-rounded" onClick={() => setReadOnly(false)}>edit</div>
                <div className="flights_row-btn material-symbols-rounded" onClick={() => deleteFlights(props.id)}>delete</div>
            </div>
        </div>
    );
});

export default FlightRow;