import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import bakery_rolls from "../assets/images/bakery/bakery_rolls.jpg";
import "./BakeryPage.css";

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

const BakeryPage = () => {
	return (
		<motion.div
			className="bakery-page-container"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={bgVariant}
		>
			<motion.div className="single" initial="exit" animate="enter" exit="exit">
				<div className="img-container">
					<motion.img
						variants={imageVariants}
						src={bakery_rolls}
						alt="rolls sitting in a window"
					/>
				</div>
			</motion.div>
			<div className="content-container">
				<motion.div
					className="bakery-content"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={textVariants}
				>
					<p>
						Our baked goods are always made fresh, daily. Gluten-free and Keto
						options are available unless sold out for the day.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta
						minus dignissimos dolor eaque fugit nemo delectus commodi cum. Hic
						laudantium debitis voluptatum at libero commodi placeat itaque
						adipisci impedit.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta
						minus dignissimos dolor eaque fugit nemo delectus commodi cum. Hic
						laudantium debitis voluptatum at libero commodi placeat itaque
						adipisci impedit.
					</p>
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

export default BakeryPage;
