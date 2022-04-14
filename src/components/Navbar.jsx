import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
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
		//y: "-100%",
		opacity: 0,
		transition: { duration: 1.5, ...exitTransition },
	},
	moveIn: {
		// y: "0%",
		opacity: 1,
		transition: {
			delay: 2.5,

			duration: 1.5,
			...enterTransition,
		},
	},
};

const ulContainer = {
	exit: { opacity: 0, transition },
	enter: {
		opacity: 1,
		transition,
	},
};

const Navbar = () => {
	return (
		<nav className="">
			<motion.div id="nav_content" className="navbar-container">
				<motion.ul
					className="nav-items"
					variants={ulContainer}
					initial="exit"
					animate="enter"
					exit="exit"
				>
					<motion.li
						className="font-face-nycd"
						variants={enterVariant}
						initial="moveOut"
						animate="moveIn"
					>
						<Link to="/menu" className="anchor-link ">
							Menu
						</Link>
					</motion.li>

					<motion.li
						className="font-face-nycd"
						variants={enterVariant}
						initial="moveOut"
						animate="moveIn"
					>
						<Link to="/about" className="anchor-link ">
							About
						</Link>
					</motion.li>

					{/* <motion.li
						className="font-face-nycd"
						variants={enterVariant}
						initial="moveOut"
						animate="moveIn"
					>
						<Link to="/blog" className="anchor-link ">
							Blog
						</Link>
					</motion.li> */}

					<motion.li
						className="font-face-nycd"
						variants={enterVariant}
						initial="moveOut"
						animate="moveIn"
					>
						<Link to="/contact" className="anchor-link ">
							Contact
						</Link>
					</motion.li>
				</motion.ul>
				{/* <Link
						to="/contact"
						className="inline-block p-2 font-medium text-sm border mt-2 lg:mt-0 text-blue-500 border-blue-500 ml-6 hover:bg-blue-500 hover:text-blue-50"
					>
						GET IN TOUCH
					</Link> */}
			</motion.div>
		</nav>
	);
};

export default Navbar;
