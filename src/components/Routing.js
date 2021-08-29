
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchAppBar from './AppBar';
import Store from './Store/Store';
import { useEffect, useState } from 'react';

const Routing = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return ( 
        <Router>
            <SearchAppBar setSearchTerm = {setSearchTerm}/>
            <Switch>
                <Route path = "/" render = {() => 
                    <Store searchTerm = {searchTerm} />
                }/>
            </Switch>
        </Router>
    )
}

export default Routing;