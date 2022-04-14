import React from "react";
import "./Home.css";

import { motion } from "framer-motion";
import Drinks from "../components/Drinks";
import Bakery from "../components/Bakery";
import Sandwiches from "../components/Sandwiches";

// import Footer from "../components/Footer";
// import LoadingDots from "./components/LoadingDots";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
	initial: { scale: 0.9, opacity: 0 },
	enter: { scale: 1, opacity: 1, transition },
	exit: {
		scale: 0.5,
		opacity: 0,
		transition: { duration: 0.5, ...transition },
	},
};
const imageVariants = {
	hover: { scale: 1.2 },
};
const frameVariants = {
	hover: { scale: 0.95 },
};

//New Variants

const bannerVariant = {
	exit: { opacity: 0, transition },
	enter: {
		opacity: 1,
		transition,
	},
};

function Home() {
	return (
		<>
			<motion.div className="container">
				<motion.div
					className="banner"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={bannerVariant}
				>
					<motion.div className="top-text">
						<motion.h1 className="site-title">Cafe Fancé</motion.h1>
					</motion.div>
					<motion.div className="categories-container">
						<motion.div className="drinks-container">
							<Drinks
								transition={transition}
								thumbnailVariants={thumbnailVariants}
								imageVariants={imageVariants}
								frameVariants={frameVariants}
							/>
						</motion.div>
						<motion.div className="bakery-container">
							<Bakery
								transition={transition}
								thumbnailVariants={thumbnailVariants}
								imageVariants={imageVariants}
								frameVariants={frameVariants}
							/>
						</motion.div>
						<motion.div className="sandwiches-container">
							<Sandwiches
								transition={transition}
								thumbnailVariants={thumbnailVariants}
								imageVariants={imageVariants}
								frameVariants={frameVariants}
							/>
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div
					className="footer-container"
					initial="exit"
					animate="enter"
					exit="exit"
					variants={bannerVariant}
				>
					<motion.div className="footer-text">
						<motion.p>located @ 57 Broadway St, The Shire</motion.p>
						<motion.p>weekdays 9 to 9 &amp; weekends 11 to 6</motion.p>

						<div className="footer-content">
							<ul className="socials">
								<li>
									<a href="#">
										<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-google-plus"></i>
									</a>
								</li>
							</ul>
							{/* <p> &copy; blueMug_ Web Design</p> */}
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}

export default Home;
