import {makeAutoObservable} from "mobx";
import flightsList from './flights.json'

export class FlightsStore {
    flights = flightsList
    constructor() {
        makeAutoObservable(this)
    }

    setFlights = (id, name, value) => {
        if (this.flights.map(f => f.id).includes(Number(id))) {
            this.flights[id-1][name] = value
        }
    }
}