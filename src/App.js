import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import Header from "./shared/Header/Header";

function App() {
    console.log('app')
    return (
        <div className='App'>
            <Header/>
            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route exact path='/'>*/}
            {/*            /!*<Redirect to='/idk'/>*!/*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </div>
    )
}

export default App;
