
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchAppBar from './AppBar';
import Shop from './Shop';
import { useEffect, useState } from 'react';

const Routing = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return ( 
        <Router>
            <SearchAppBar setSearchTerm = {setSearchTerm}/>
            <Switch>
                <Route path = "/" render = {() => 
                    <Shop searchTerm = {searchTerm} />
                }/>
            </Switch>
        </Router>
    )
}

export default Routing;