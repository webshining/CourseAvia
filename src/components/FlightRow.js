import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const FlightRow = observer((props) => {
    const [read, setRead] = useState(true)
    const [time, setTime] = useState('00:00')
    const {setFlights, deleteFlights} = useContext(Context).flights
    const onChangeHandler = (e) => {
        setFlights(e.target.id, e.target.name, e.target.value, null)
    }
    const timeHandler = () => {
        const firstDate = props.time_start
        const secondDate = props.time_end
        let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]);
        let different = (getDate(secondDate) - getDate(firstDate));
        let differentRes, hours, minuts;
        if(different > 0) {
            differentRes = different;
            hours = Math.floor((differentRes % 86400000) / 3600000);
            minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
        } else {
            differentRes = Math.abs((getDate(firstDate) - getDate(secondDate)));
            hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
            minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
        }
        if (minuts === 60) minuts = '00'
        let result = hours + ':' + minuts;
        setTime(result)
        return true
    }
    useEffect(() => {
        timeHandler()
    }, [onChangeHandler])
    return (
        <tr>
            <td><input readOnly={true} value={props.id} onChange={e => onChangeHandler(e)} id={props.id} name={"id"} type={"number"}/></td>
            <td><input readOnly={read} value={props.from} onChange={e => onChangeHandler(e)} id={props.id} name={"from"} type={"text"}/></td>
            <td><input readOnly={read} value={props.to} onChange={e => onChangeHandler(e)} id={props.id} name={"to"} type={"text"}/></td>
            <td><input readOnly={read} value={props.time_start} onChange={e => onChangeHandler(e)} id={props.id} name={"time_start"} type={"time"}/></td>
            <td><input readOnly={read} value={props.time_end} onChange={e => onChangeHandler(e)} id={props.id} name={"time_end"} type={"time"}/></td>
            <td><input readOnly={true} value={time} id={props.id} name={"time"} type={"string"} maxLength='2'/></td>
            <td>
                <span className="material-symbols-rounded" onClick={() => setRead(false)}>edit</span>
                <span className="material-symbols-rounded" onClick={() => deleteFlights(props.id)}>delete</span>
            </td>
        </tr>
    )
});

export default FlightRow;