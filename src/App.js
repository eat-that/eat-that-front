import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./shared/Header/Header";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {danger, primary, secondary} from "./shared/colors";
import EstablishmentList from "./components/Establishment/Card/EstablishmentList";

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
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/establishmentList'/>
                        </Route>
                        <Route path='/establishmentList'>
                            <EstablishmentList/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default App;
