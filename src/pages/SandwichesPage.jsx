import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import sandwiches_onBox from "../assets/images/sandwiches/sandwiches_onBox.jpg";
import "./SandwichesPage.css";

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

const SandwichesPage = () => {
	return (
		<motion.div
			className="sandwiches-page-container"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={bgVariant}
		>
			<motion.div className="single" initial="exit" animate="enter" exit="exit">
				<div className="img-container">
					<motion.img
						variants={imageVariants}
						src={sandwiches_onBox}
						alt="sandwiches resting on a vintage box"
					/>
				</div>
			</motion.div>
			<div className="content-container">
				<motion.div
					className="sandwiches-content"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={textVariants}
				>
					<p>
						The kitchen creations are some of our finest work. We have a wide
						variety of sandwiches, wraps and paninis to satisfy every craving.
					</p>
					<br />
					<p>
						When you get hungry and crave some fancy scenery and a relacing
						environment - head on down to our establishment and we will serve
						you up a fresh meal with a beverage of your choice.
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

export default SandwichesPage;
