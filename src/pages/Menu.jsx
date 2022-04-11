import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import menu_left from "../assets/images/menu/menu_left.jpg";
import "./Menu.css";

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

const Menu = () => {
	return (
		<motion.div
			className="menu-page-container"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={bgVariant}
		>
			<motion.div
				className="single"
				initial="exit"
				animate="enter"
				exit="exit"
				variants={bgVariant}
			>
				<div className="img-container">
					<motion.img
						variants={imageVariants}
						src={menu_left}
						alt="espresso or coffee being poured from machine"
					/>
				</div>
			</motion.div>
			<div className="content-container">
				<motion.div
					className="menu-content"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={textVariants}
				>
					<h3>Brewed Coffee</h3>
					<h5>From The Pot</h5>
					<p>Freshly brewed coffee straight from the pot.</p>
					<p>sm 1.25 med 1.75 lg 2.25</p>
					<br />
					<h5>Cafe Au Lait</h5>
					<p>
						Your choice of brewed coffee with steamed milk and topped with a
						dollop of milk froth
					</p>
					<p>sm 3.25 med 4.75 lg 5.00</p>
					<br />
					<h3>Baked Treats</h3>
					<h5>Biscotti</h5>
					<p>traditional anise, almond, rosa, chocolate, cranberry walnut</p>
					<p>3.25</p>
					<br />
					<h5>Croissant</h5>
					<p>chocolate, bran, corn, blueberry, cranberry orange</p>
					<p>4.75</p>
					<br />
					<h3>Kitchen Creations</h3>
					<h5>Spicy Club Sandwich</h5>
					<p>Chicken &amp; Bacon or Vegan w/ tomato, lettuce, spicy mayo</p>
					<p>6.25</p>
					<br />
					<h5>Deli Sandwich</h5>
					<p>pastrami, salami, corned beef and more!</p>
					<p>5.75</p>
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

export default Menu;
