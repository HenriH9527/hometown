import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"

import App from '../pages/App'
import Login from '../pages/login'

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </HashRouter>
)