import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./Category.css"

class Category extends Component {

	render() {
		return (
		<div className="w3-third w3-container w3-margin-bottom">
	      <div className="w3-container w3-white">
	        <button type="button" class="btn btn-info btn-circle btn-xl" id="greenButton"><i class="fa fa-check"></i></button>
	        <button type="button" class="btn btn-info btn-circle btn-xl" id="yellowButton"><i class="fa fa-check"></i></button>
	        <button type="button" class="btn btn-info btn-circle btn-xl" id="redButton"><i class="fa fa-check"></i></button>
	        <br/></br/>
	        <p><b>ATTENDANCE</b></p>
	        <p>Maintains regular attendance with prior notification of absence. Consistently punctual.</p>
	      </div>
	    </div>
		);
	}	
}

export default Category;