import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Nav.css"
import Form from "../Form/Form.js"

class Nav extends Component {

	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="{#}">Enter Review Data</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      					<span className="navbar-toggler-icon"></span>
    				</button>
    				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				 		<ul class="navbar-nav mr-auto">
					        <li class="nav-item dropdown">
					          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					            Select Employee
					          </a>
					          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					            <a className="dropdown-item" href="#">Action</a>
					            <a className="dropdown-item" href="#">Another action</a>
					            <div className="dropdown-divider"></div>
					            <a className="dropdown-item" href="{#}">Something else here</a>
					          </div>
					        </li>
				     	</ul>
				     	<Form />
    				</div>
				</nav>
			</header>
		);
	}	
}

export default Header;