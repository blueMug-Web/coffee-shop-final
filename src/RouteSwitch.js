import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import App from "./App";
import Navbar from "./components/Navbar";
import Drinks from "./components/Drinks";
import DrinksPage from "./pages/DrinksPage";
import BakeryPage from "./pages/BakeryPage";
import SandwichesPage from "./pages/SandwichesPage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import LoadingDots from "./components/LoadingDots";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

const exitTransition = {
	duration: 1.5,
	ease: [0.43, 0.13, 0.23, 0.96],
};
const enterTransition = {
	duration: 1.8,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const RouteSwitch = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const location = useLocation();
	return (
		<>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence exitBeforeEnter exit={false}>
					<Routes key={location.pathname} location={location}>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="drinks" element={<DrinksPage />} />
							<Route path="bakery" element={<BakeryPage />} />
							<Route path="sandwiches" element={<SandwichesPage />} />
							<Route path="menu" element={<Menu />} />
							<Route path="contact" element={<Contact />} />
							<Route path="about" element={<About />} />
						</Route>
					</Routes>
				</AnimatePresence>
			</AnimateSharedLayout>
		</>
	);
};
const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			{/* <Footer /> */}
		</>
	);
};

export default RouteSwitch;

// {loading ? (
// 	<Loader />
// ) : (

// 	)}

// {
// 	loading ? (
// 		<motion.div key="loader">
// 			<Loader setLoading={setLoading} />
// 		</motion.div>
// 	) : (
// 		<>
// 			{!loading && (
// 				<div className="transition-image final">
// 					<motion.img
// 						transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
// 						src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
// 						layoutId="main-image-1"
// 					/>
// 				</div>
// 			)}
// 		</>
// 	);
// }
