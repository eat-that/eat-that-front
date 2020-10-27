import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {primary, secondary} from "./shared/colors";

import EstablishmentDetail from "./components/Establishment/Details/EstablishmentDetail";
import Home from "./components/Home/Home";

const theme = createMuiTheme({
    palette:{
        primary : {
            main : primary
        },
        secondary : {
            main : secondary
        },
    }
});

function App() {
    console.log('app')
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/home'/>
                        </Route>
                        <Route path='/home'>
                            <Home/>
                        </Route>
                        <Route path='/establishment/detail' render={(props)=> (<EstablishmentDetail {...props}/>)}/>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default App;
