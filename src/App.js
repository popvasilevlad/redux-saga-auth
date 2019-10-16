import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AuthScreen from 'screens/auth';
import DashboardScreen from 'screens/dashboard';
import RedirectHelper from 'utils/redirect';

const App = () => {
    return (
    	<>
	        <Router>
	        	<Route path="/" exact component={AuthScreen} />
	        	<Route path="/dashboard" component={DashboardScreen} />
	        	<RedirectHelper />
	        </Router>
	    </>
    );
};

export default App;