import React from "react";
import './App.css';
import HomePage from './yaniv/App.js';
import AddRidePage from './kessem/App.js';
// import SavePlacePage from './tal/App.js';
// import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Routes>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/AddRidePage" > <AddRidePage/> </Route>
        </div>
        </Routes>
    );
}

const Home = () => (
    <div>
        <HomePage className ="HomePage"/>
    </div>
);


export default App;
