import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AuthScreen from 'screens/auth';
import HomeScreen from 'screens/home';

const App = () => {
    return (
    	<>
	        <Router>
	        	<Route path="/" component={AuthScreen} />
	        	<Route path="/dashboard" component={HomeScreen} />
	        </Router>
	    </>
    );
};

export default App;