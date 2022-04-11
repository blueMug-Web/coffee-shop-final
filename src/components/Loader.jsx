import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import Image from "./Image";

import loader_main from "../assets/images/home/home_bgMain.jpg";
import loader_1 from "../assets/images/loader/loader_1.jpg";
import loader_2 from "../assets/images/loader/loader_2.jpg";
import loader_3 from "../assets/images/loader/loader_3.jpg";
import loader_4 from "../assets/images/loader/loader_4.jpg";

import Image from "./Image";

import home_threeDrinks from "../assets/images/home/home_threeDrinks.jpg";
import home_bakedGoods from "../assets/images/home/home_bakedGoods.jpg";
import home_sandwichPlate from "../assets/images/home/home_sandwichPlate.jpg";

import LoadingDots from "./LoadingDots";
import "./Loader.css";

const exitTransition = {
	duration: 1.5,
	ease: [0.43, 0.13, 0.23, 0.96],
};
const enterTransition = {
	duration: 0.6,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const Loader = () => {
	return (
		<motion.div
			className="loadingscreen"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					duration: 1.5,
					...enterTransition,
				},
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 1.5,
					exitTransition,
				},
			}}
		>
			<motion.div className="loadingscreen-dots">
				<LoadingDots />
			</motion.div>
		</motion.div>
	);
};
export default Loader;
