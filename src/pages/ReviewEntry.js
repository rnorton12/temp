import React, { Component } from "react";
import "./ReviewEntry.css";
import Nav from "../components/ReviewEntry/Nav/Nav.js"
import Footer from "../components/Common/Footer/Footer.js"

class ReviewEntry extends Component {

	render() {
		return (
			<div className="w3-content">
				<Nav />
				<PhotoGrid />
				<Footer />
			</div>
		);
	}
}

export default Welcome;