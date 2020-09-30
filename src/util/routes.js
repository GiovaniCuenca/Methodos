import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../screens'

const Routes = () => {
    return (
        <Switch>
            {/* Main Page */}
            <Route exact path="/" component={Home} />

            {/* Content */}
            {/* <Route exact path="/content" component={} /> */}
        </Switch>
    )
}

export { Routes }