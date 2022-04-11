import React from "react";
import { motion } from "framer-motion";

//x: 0 will put it center of screen
const horizontalSlide = {
	initial: { opacity: 1, x: -100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 1, x: 100 },
};

const AnimateComponent = ({ children }) => {
	return (
		<motion.div
			variants={horizontalSlide}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimateComponent;
