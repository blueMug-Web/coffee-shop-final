import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { images } from "./images";
import contact_left from "../assets/images/contact/contact_left.jpg";

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

function ContactForm() {
	const [inputs, setInputs] = useState({});
	const [textarea, setTextarea] = useState("What's on your mind?");
	//The content of a textarea goes in the value attribute

	const handleTextAreaChange = (event) => {
		setTextarea(event.target.value);
	};
	const handleNameChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleEmailChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleSubjectChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
	};

	return (
		<div className="form-data">
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						className="input-box"
						type="text"
						name="username"
						id="name"
						value={inputs.username || ""}
						onChange={handleNameChange}
						max="50"
						autoComplete="off"
						required
					/>
				</label>
				<br />
				<label>
					Email
					<input
						className="input-box"
						type="text"
						name="email"
						id="email"
						value={inputs.email || ""}
						onChange={handleEmailChange}
						max="50"
						autoComplete="off"
						required
					/>
				</label>
				<br />
				<label>
					Subject
					<input
						className="input-box"
						type="text"
						name="subject"
						id="subject"
						value={inputs.subject || ""}
						onChange={handleSubjectChange}
						max="70"
						size={25}
						autoComplete="off"
						required
					/>
				</label>
				<br />
				<textarea
					className="input-textarea"
					value={textarea}
					onChange={handleTextAreaChange}
					maxLength="250"
					placeholder="What's on your mind?"
					cols={28}
					rows={8}
					required
					autoComplete="off"
				/>
				<br />
				<input type="submit" className="submit-btn" />
			</form>
		</div>
	);
}

const Contact = () => {
	return (
		<>
			<motion.div
				className="contact-page-container"
				initial="exit"
				animate="enter"
				exit="exit"
				variants={bgVariant}
			>
				<motion.div
					className="single"
					initial="exit"
					animate="enter"
					exit="exit"
				>
					<div className="img-container">
						<motion.img
							variants={imageVariants}
							src={contact_left}
							alt="coffee cannisters"
						/>
					</div>
				</motion.div>
				<div className="form-container">
					<motion.div
						className="contact-content"
						initial="exit"
						animate="enter"
						exit="exit"
						variants={textVariants}
					>
						{/*  --- */}
						<motion.div>
							<h3>Have a question for us?</h3>
							<ContactForm />
						</motion.div>
						{/*  --- */}
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
		</>
	);
};

export default Contact;
