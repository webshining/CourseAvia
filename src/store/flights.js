import {makeAutoObservable} from "mobx";
import flightsList from './flights.json'
import flights from "../pages/Flights";

export class FlightsStore {
    flights = flightsList
    constructor() {
        makeAutoObservable(this)
    }

    setFlights = (id, name, value) => {
        if (!(id in this.flights.map(i => i.id))) {
            this.flights.push()
        } else {
            this.flights.forEach(f => {
                if(f.id == id) {
                    f[name] = value
                }
            })
        }
    }
}