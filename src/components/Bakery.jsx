import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import home_bakedGoods from "../assets/images/home/home_bakedGoods.jpg";
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

// const duration = 1.9;

const Bakery = ({
	transition,
	thumbnailVariants,
	imageVariants,
	frameVariants,
}) => {
	return (
		<div>
			<motion.div
				class="bakery"
				initial="moveOut"
				animate="moveIn"
				exit="moveOut"
				variants={enterVariant}
			>
				<div className="empty-div"></div>
				{/* <motion.div className="text-container">
					<motion.div
						className="bakery-text"
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
						<h1 className="font-face-nycd">Bakery</h1>
					</motion.div>
				</motion.div> */}
				<div className="bakery-image">
					<motion.div className="thumbnail" variants={thumbnailVariants}>
						<motion.div
							className="frame"
							whileHover="hover"
							variants={frameVariants}
							transition={transition}
						>
							<Link to={`/bakery/`}>
								<motion.img
									className="bakery-image"
									src={home_bakedGoods}
									alt="baked goods"
									variants={imageVariants}
									transition={transition}
								/>
								<motion.div className="bakery-hover-title">
									<motion.h3 className="bakery-hover-h3">bakery</motion.h3>
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>
				</div>
				<div className="empty-div"></div>
			</motion.div>
		</div>
	);
};

export default Bakery;
