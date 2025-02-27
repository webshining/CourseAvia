import {makeAutoObservable} from "mobx";

export class FlightsStore {
    flights = []
    constructor() {
        makeAutoObservable(this)
    }

    setFlights = (id, name, value, obj) => {
        if (obj) {
            this.flights = JSON.parse(obj)
        } else if (this.flights.map(f => f.id).indexOf(Number(id)) !== -1) {
            this.flights[id-1][name] = value
        } else {
            this.flights.push({id: this.flights.length+1, from: '', to: '', time_start: '00:00', time_end: '00:00', time: ''})
        }
    }
    deleteFlights = (id) => {
        this.flights = this.flights.filter(f => f.id !== Number(id))
        this.flights.forEach(f => {
            if(f.id > Number(id)) {
                f.id -= 1
            }
        })
    }
}