import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import Header from "./shared/Header/Header";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette:{
        primary : {
            main : '#E2711D'
        },
        secondary : {
            main : '#FF9505'
        }
    }
});

function App() {
    console.log('app')
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default App;
