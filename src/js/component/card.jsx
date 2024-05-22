import React from "react";
const Card = ({ imgSrc, title, text }) => {
	return (
		<div className="col">
			<div className="card h-100">
				<img src={imgSrc} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary">Find out more</button>
				</div>
			</div>
		</div>
	);
};


export default Card;