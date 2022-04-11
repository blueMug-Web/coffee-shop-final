import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import about_left from "../assets/images/about/about_left.jpg";
import drinks_bg from "../assets/images/drinks/drinks_bg.jpg";
import "./About.css";

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

const About = () => {
	return (
		<motion.div
			className="about-page-container"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={bgVariant}
		>
			<motion.div className="single" initial="exit" animate="enter" exit="exit">
				<div className="img-container">
					<motion.img
						variants={imageVariants}
						src={about_left}
						alt="inside cafe"
					/>
				</div>
			</motion.div>
			<div className="content-container">
				<motion.div
					className="about-content"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={textVariants}
				>
					<p>
						Our coffee is sourced from only the finest of beans. The staff is
						always welcoming and ready to serve a hot beverage.
					</p>
					<br />

					<p>
						Located in the heart of The Shire, our establishment has been
						serving middle earth for hundreds of years. All patrons of any shape
						and size are welcome in Cafe Fancé. Take a break from the weary
						roads of Middle Earth and enjoy the fanciest coffee or tea you'll
						ever experience!
					</p>
					<br />
					<p>
						Our baked goods are made fresh daily and all creations from the
						kitchen have gluten-free and keto options for your dietary needs or
						personal preference.
					</p>
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

export default About;
