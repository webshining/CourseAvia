import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const FlightRow = observer((props) => {
    const [read, setRead] = useState(true)
    const {setFlights, deleteFlights} = useContext(Context).flights
    const onChangeHandler = (e) => {
        setFlights({id: e.target.id, name: e.target.name, value: e.target.value})
    }

    return (
        <tr>
            <td><input readOnly={true} value={props.id} onChange={e => onChangeHandler(e)} id={props.id} name={"id"} type={"number"}/></td>
            <td><input readOnly={read} value={props.from} onChange={e => onChangeHandler(e)} id={props.id} name={"from"} type={"text"}/></td>
            <td><input readOnly={read} value={props.to} onChange={e => onChangeHandler(e)} id={props.id} name={"to"} type={"text"}/></td>
            <td><input readOnly={read} value={props.time_start} onChange={e => onChangeHandler(e)} id={props.id} name={"time_start"} type={"time"}/></td>
            <td><input readOnly={read} value={props.time_end} onChange={e => onChangeHandler(e)} id={props.id} name={"time_end"} type={"time"}/></td>
            <td><input readOnly={read} value={props.time} onChange={e => onChangeHandler(e)} id={props.id} name={"time"} type={"number"} maxLength='2'/></td>
            <td>
                <span className="material-symbols-rounded" onClick={() => setRead(false)}>edit</span>
                <span className="material-symbols-rounded" onClick={() => deleteFlights(props.id)}>delete</span>
            </td>
        </tr>
    )
});

export default FlightRow;