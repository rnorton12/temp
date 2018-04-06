import React, { Component } from "react";
import "./Form.css"

class Form extends Component {

	render() {
		return (
		<form className="form-inline my-2 my-lg-0">
        	<input className="form-control mr-sm-2" type="search" placeholder="Review Date" aria-label="Search">
      	</form>
		);
	}	
}

export default Form;