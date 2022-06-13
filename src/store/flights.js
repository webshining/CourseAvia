import {makeAutoObservable} from "mobx";

export class FlightsStore {
    flights = []
    constructor() {
        makeAutoObservable(this)
    }

    setFlights = (id, name, value, obj) => {
        if(!obj) {
            if (this.flights.map(f => f.id).indexOf(Number(id)) !== -1) {
                this.flights[id-1][name] = value
            } else {
                this.flights.push({id: this.flights.length+1, from: '', to: '', time_start: '', time_end: '', time: ''})
            }
        } else {
            this.flights = JSON.parse(obj)
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