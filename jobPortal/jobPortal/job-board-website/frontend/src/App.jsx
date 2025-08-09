import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import JobList from './components/JobList';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/jobs" component={JobList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;