import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Gallery from "./components/Gallery";
import { SingleImage } from "./components/SingleImage";
import Home from "./pages/Home";
import Drinks from "./components/Drinks";
import Bakery from "./components/Bakery";
import Sandwiches from "./components/Sandwiches";
import AnimateComponent from "./components/AnimateComponent";
import LoadingDots from "./components/LoadingDots";

// const transition = { duration: 0.5 };
// const thumbnailVariants = {
// 	initial: { scale: 0.9, opacity: 0 },
// 	enter: { scale: 1, opacity: 1, transition },
// 	exit: {
// 		scale: 0.5,
// 		opacity: 0,
// 		transition: { duration: 1.5, ...transition },
// 	},
// };
// const imageVariants = {
// 	hover: { scale: 1.1 },
// };
// const frameVariants = {
// 	hover: { delay: 3, scale: 0.95 },
// };

//New Variants
const container = {
	show: {
		transition: {
			staggerChildren: 0.35,
		},
	},
};
const item = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};

const exitTransition = {
	duration: 1.5,
	ease: [0.43, 0.13, 0.23, 0.96],
};
const enterTransition = {
	duration: 1.8,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const duration = 0.2;

// const Loader = () => {
// 	return (
// 		<motion.div
// 			className="loadingscreen"
// 			initial={{ opacity: 0 }}
// 			animate={{
// 				opacity: 1,
// 				transition: {
// 					duration: 1.5,
// 					...enterTransition,
// 				},
// 			}}
// 			exit={{
// 				opacity: 0,
// 				transition: {
// 					exitTransition,
// 				},
// 			}}
// 		>
// 			<motion.div className="loadingscreen-dots">
// 				<LoadingDots />
// 			</motion.div>
// 		</motion.div>
// 	);
// };

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<>
			{/* <Drinks
				transition={transition}
				thumbnailVariants={thumbnailVariants}
				imageVariants={imageVariants}
				frameVariants={frameVariants}
			/>

			<Bakery
				transition={transition}
				thumbnailVariants={thumbnailVariants}
				imageVariants={imageVariants}
				frameVariants={frameVariants}
			/>
			<Sandwiches
				transition={transition}
				thumbnailVariants={thumbnailVariants}
				imageVariants={imageVariants}
				frameVariants={frameVariants}
			/> */}
		</>
	);
}

export default App;

// Grid is created on the 'container'.
// pages and everything else will be displayed within the container as components
