import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from './history'

import List from '../pages/List'
import Details from '../pages/Details'

export default function App(){
    return (
        <Router history={history} >
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/details" component={Details} />
            </Switch>
        </Router>
    )
}