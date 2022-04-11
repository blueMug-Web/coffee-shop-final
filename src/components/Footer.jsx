import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer-content">
				{/* <h3>Cafe Fance</h3> */}

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
					{/* <li>
						<a href="#">
							<i className="fa fa-youtube"></i>
						</a>
					</li> */}
					{/* <li>
						<a href="#">
							<i className="fa fa-linkedin-square"></i>
						</a>
					</li> */}
				</ul>
				<p> &copy; blueMug_ Web Design</p>
			</div>
		</>
	);
};

export default Footer;
