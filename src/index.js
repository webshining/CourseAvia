import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FlightsStore} from "./store/flights";

export const Context = createContext({})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context.Provider value={{
            flights: new FlightsStore()
        }}>
            <App />
        </Context.Provider>
    </BrowserRouter>
);
