import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/" component = {Home} />
            </Switch>
        </Router>
    )
}

export default Routing;