import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Livros from '../pages/Livros/Livros'

export default function Routes() {
    
    return (
        <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/livros" component={Livros}/>
        </Switch>
    )
}
