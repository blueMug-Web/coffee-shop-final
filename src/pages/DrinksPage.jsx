import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import drinks_coffee from "../assets/images/drinks/drinks_coffee.jpg";
import drinks_bg from "../assets/images/drinks/drinks_bg.jpg";
import "./DrinksPage.css";

const transition = {
	duration: 1.6,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
	exit: { y: "50%", opacity: 0, transition },
	enter: {
		y: "0%",
		opacity: 1,
		transition,
	},
};
const bgVariant = {
	exit: { opacity: 0, transition: { delay: 0.1, ...transition } },
	enter: {
		opacity: 1,
		transition: { delay: 0.1, ...transition },
	},
};

const backVariants = {
	exit: { x: 100, opacity: 0, transition: { delay: 0.1, ...transition } },
	enter: { x: 0, opacity: 1, transition: { delay: 1.3, ...transition } },
};
const textVariants = {
	exit: { opacity: 0, transition: { delay: 0.4, ...transition } },
	enter: { x: 0, opacity: 1, transition: { delay: 0.7, ...transition } },
};

const exitTransition = {
	duration: 0.5,
	ease: [0.43, 0.13, 0.23, 0.96],
};
const enterTransition = {
	duration: 1.8,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const duration = 0.2;

const DrinksPage = () => {
	return (
		<motion.div
			className="drinks-page-container"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={bgVariant}
		>
			<motion.div className="single" initial="exit" animate="enter" exit="exit">
				<div className="img-container">
					<motion.img
						variants={imageVariants}
						src={drinks_coffee}
						alt="espresso or coffee being poured from machine"
					/>
				</div>
			</motion.div>
			<div className="content-container">
				<motion.div
					className="drinks-content"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={textVariants}
				>
					<h3>Hot</h3>
					<br />
					<h5>From The Pot</h5>
					<p>sm 1.25 med 1.75 lg 2.25</p>

					<h5>Caramel Macchiato</h5>
					<p>sm 1.25 med 1.75 lg 2.25</p>

					<h5>Cafe Au Lait</h5>
					<p>
						Your choice of brewed coffee with steamed milk and topped with a
						dollop of milk froth
					</p>
					<p>sm 3.25 med 4.75 lg 5.00</p>
					<br />

					<h3>Cold</h3>
					<br />
					<h5>Cold Brew</h5>
					<p>sm 1.25 med 1.75 lg 2.25</p>

					<h5>Iced Latte</h5>
					<p>sm 1.25 med 1.75 lg 2.25</p>

					<h5>Frappuccino</h5>
					<p>sm 3.25 med 4.75 lg 5.00</p>
					<br />
				</motion.div>
			</div>
			<motion.div
				className="back"
				initial="exit"
				animate="enter"
				exit="exit"
				variants={backVariants}
			>
				<Link to="/">← Back</Link>
			</motion.div>
		</motion.div>
	);
};

export default DrinksPage;
