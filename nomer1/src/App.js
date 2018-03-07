import React, { Component } from 'react';
import {Link, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'

class App extends Component {
  constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
  }
  
	gantiNama = name => this.setState({name})
  changeActive = active => this.setState({active})
  
	render = () =>
		<div id="app">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<Link to='/Page1' 
						onClick={() => this.changeActive(0)} 
						className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}
					>Login</Link>
				</li>
				<li className="nav-item">
					<Link to='/Page2'
						onClick={() => this.changeActive(1)} 
						className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}
					>Welcome</Link>
				</li>
			</ul>
			<div id="display">
				<Route path='/' render={() => <Redirect to='/Page1'/>}/>
				<Route path='/Page1' render={() => <Page1 changeActive={this.changeActive.bind(this)} gantiNama={this.gantiNama.bind(this)}/>}/>
				<Route path='/Page2' render={() => <Page2 name={this.state.name}/>}/>				
			</div>
		</div>
}

export default App;
