import React from "react";
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="p-2 mb-4  rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-1 fw-bold"><strong>A Warm Welcome!</strong></h1>
					<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
					<button className="btn btn-primary btn-lg" type="button">Call to action!</button>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;