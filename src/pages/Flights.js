import React, {useContext} from 'react';
import '../styles/flights.scss'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import FlightRow from "../components/FlightRow";

const Flights = observer(() => {
    const {flights, setFlights} = useContext(Context).flights
    const saveFileHandler = () => {
        const element = document.getElementById("save")
        const file = new Blob([JSON.stringify(flights, null, 4)], {type: 'application/json'})
        element.href = URL.createObjectURL(file)
        element.download = "flights.json";
    }
    const openFileHandler = () => {
        const elem = document.getElementById('file')
        elem.click()
    }
    const addRow = () => {
        setFlights()
    }
    const getFile = (e) => {
        if(!/.json$/.test(e.target.files[0].name)) {
           return alert('Файл должен быть типа json')
        }
        const fileReader = new FileReader()
        setFlights()
        fileReader.readAsText(e.target.files[0])
        fileReader.onloadend = () => {
            const content = fileReader.result
            setFlights(null, null, null, content)
        }
    }
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
                        <FlightRow key={i.id} {...i} id={flights.indexOf(i) + 1}/>
                    )}
                </div>
                <div className="flights_btns">
                    <div className="flights_btn material-symbols-rounded" onClick={addRow}>add</div>
                    <input type="file" id="file" style={{display: 'none'}} onChange={getFile}/>
                    <div className="flights_btn material-symbols-rounded" onClick={openFileHandler}>folder_open</div>
                    <a href="/flights" className="flights_btn material-symbols-rounded" id="save" onClick={saveFileHandler}>save</a>
                </div>
            </div>
        </div>
    );
});

export default Flights;