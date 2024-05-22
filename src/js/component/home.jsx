

//include images into your bundle
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

//create your first component
import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="Landing Page">
			<Navbar />
			
			
			<div className="row row-cols-1 row-cols-md-4 g-4">
				<Card imgSrc="https://placedog.net/640/480?random" title="Card title" text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
				<Card imgSrc="https://placedog.net/400/297?id=99" title="Card title" text="This card has supporting text below as a natural lead-in to additional content." />
				<Card imgSrc="https://placedog.net/640/480?randomhttps://placedog.net/400/313?id=64" title="Card title" text="This card has supporting text below as a natural lead-in to additional content." />
				<Card imgSrc="https://placedog.net/400/284?id=11" title="Card title" text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." />
			</div>
		
		</div>
	);
};


export default Home;



