import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import home_sandwich from "../assets/images/home/home_sandwich.jpg";
import home_sandwichPlate from "../assets/images/home/home_sandwichPlate.jpg";
import "../pages/Home.css";

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

// const duration = 2.4;

const Sandwiches = ({
	transition,
	thumbnailVariants,
	imageVariants,
	frameVariants,
}) => {
	return (
		<div>
			<motion.div
				class="sandwiches"
				initial="moveOut"
				animate="moveIn"
				exit="moveOut"
				variants={enterVariant}
			>
				<div className="empty-div"></div>
				<div className="sandwiches-image">
					<motion.div className="thumbnail" variants={thumbnailVariants}>
						<motion.div
							className="frame"
							whileHover="hover"
							variants={frameVariants}
							transition={transition}
						>
							<Link to={`/sandwiches/`}>
								<motion.img
									className="sandwiches-image"
									src={home_sandwichPlate}
									alt="sandwiches"
									variants={imageVariants}
									transition={transition}
								/>
								<motion.div className="sandwiches-hover-title">
									<motion.h3 className="sandwiches-hover-h3">kitchen</motion.h3>
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>
				</div>
				<motion.div className="text-container">
					{/* <motion.div
						className="sandwiches-text"
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
								delay: duration,
								// duration: 1.5,
								...exitTransition,
							},
						}}
						// transition={{ delay: duration, duration: 3 }}
					>
						<h1 className="font-face-nycd">Sandwiches</h1>
					</motion.div> */}
				</motion.div>
				<div className="empty-div"></div>
			</motion.div>
		</div>
	);
};

export default Sandwiches;
