import {makeAutoObservable} from "mobx";
import flightsList from './flights.json'

export class FlightsStore {
    flights = flightsList
    constructor() {
        makeAutoObservable(this)
    }

    setFlights = (id, name, value) => {
        if (this.flights.map(f => f.id).indexOf(Number(id)) !== -1) {
            this.flights[id-1][name] = value
        }
    }
    deleteFlights = (id) => {
        this.flights = this.flights.filter(f => f.id !== Number(id))
        this.flights.forEach(f => {
            if(f.id > Number(id)) {
                f.id -= 1
            }
        })
        console.log(this.flights.map(f => f.id))
    }
}