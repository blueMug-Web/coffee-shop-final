import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import home_singleCup from "../assets/images/home/home_singleCup.jpg";
import home_threeDrinks from "../assets/images/home/home_threeDrinks.jpg";
import "../pages/Home.css";
import AnimateComponent_Slide_X from "./AnimateComponent";

const exitTransition = {
	duration: 0.5,
	ease: [0.43, 0.13, 0.23, 0.96],
};
const enterTransition = {
	duration: 1.8,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const enterVariant = {
	moveOut: {
		y: "5%",
		opacity: 0,
		transition: { duration: 1.5, ...exitTransition },
	},
	moveIn: {
		y: "0%",
		opacity: 1,
		transition: { duration: 1.5, ...enterTransition },
	},
};
const exitVariantText = {
	moveOutText: {
		x: "100%",
		opacity: 0,
		transition: { duration: 1.5, ...exitTransition },
	},
	moveInText: {
		x: "0%",
		opacity: 1,
		transition: { duration: 1.5, ...enterTransition },
	},
};

// const duration = 1.6;

const Drinks = ({
	transition,
	thumbnailVariants,
	imageVariants,
	frameVariants,
}) => {
	return (
		<div>
			<motion.div
				className="drinks"
				initial="moveOut"
				animate="moveIn"
				exit="moveOut"
				variants={enterVariant}
			>
				{/* <div className="empty-div"></div> */}

				<motion.div className="drinks-image">
					<motion.div className="thumbnail" variants={thumbnailVariants}>
						<motion.div
							className="frame"
							whileHover="hover"
							variants={frameVariants}
							transition={transition}
						>
							<Link to={`/drinks/`}>
								<motion.img
									className="drinks-image"
									src={home_threeDrinks}
									alt="coffee and drinks"
									variants={imageVariants}
									transition={transition}
								/>
								<motion.div className="drinks-hover-title">
									<motion.h3 className="drinks-hover-h3">coffee</motion.h3>
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* <div className="empty-div"></div> */}

				{/* <motion.div className="text-container">
					<motion.div
						className="drinks-text"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: duration,
								// duration: 1.5,
								...enterTransition,
							},
						}}
						exit={{
							opacity: 0,
							transition: {
								exitTransition,
							},
						}}
					>
						<h1 className="font-face-nycd">Cafe</h1>
					</motion.div>
				</motion.div> */}

				{/* <div className="empty-div"></div> */}
			</motion.div>
		</div>
	);
};

export default Drinks;
