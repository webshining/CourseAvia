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
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Звідки</th>
                            <th>Куди</th>
                            <th>Час Відпр.</th>
                            <th>Час Прибут.</th>
                            <th>Час Польо.</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map(f =>
                            <FlightRow key={f.id} {...f} id={flights.indexOf(f)+1}/>
                        )}
                    </tbody>
                </table>
                <div className="flights_btns">
                    <div className="flights_btn material-symbols-rounded" onClick={setFlights}>add</div>
                    <input type="file" id="file" style={{display: 'none'}} onChange={e => getFile(e)}/>
                    <div className="flights_btn material-symbols-rounded" onClick={openFileHandler}>folder_open</div>
                    <a href="/flights" className="flights_btn material-symbols-rounded" id="save" onClick={saveFileHandler}>save</a>
                </div>
            </div>
        </div>
    );
});

export default Flights;