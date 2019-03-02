import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from './components/login/LoginPage.js'
import Main from './components/dashboard/Main.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={LoginPage}/>
						<Route path="/dashboard" component={Main}/>
					</div>
				</Router>
			</div>
			
		);
	}
}

export default App;
