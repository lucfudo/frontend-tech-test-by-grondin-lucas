import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage, DetailsPage} from "../Pages";
import {Header} from "../_components";

export function App(){
    const [input, inputSet] = useState('');

    return(
        <>
            <Router>
                <Header input={input} inputSet={inputSet}/>
                <Switch>
                    <Route exact path='/'>
                        <HomePage input={input} inputSet={inputSet}/>
                    </Route>
                    <Route path='/details/:id'>
                        <DetailsPage input={input} inputSet={inputSet}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
