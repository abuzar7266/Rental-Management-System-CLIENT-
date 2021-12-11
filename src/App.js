import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { Redirect } from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import LoginPage from './page/LoginPage';

class App extends Component{
    render()
    {
    return (<> 
    <BrowserRouter>
    <Switch>
    <Route path="/" component={() => <LoginPage/>}/>
    </Switch>
    </BrowserRouter>
    </>);
    }
};
export default App;