import React from "react";
import Img from "../assets/images/about-img.gif";
import { Fade } from "react-reveal";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-scroll";


const AboutUs = () => {
	return (
		<div id="aboutUs" className="about_container">
			<div className="rightSide_text">
				<LightSpeed>
					<h1 className="font-sizes-title"><span className="heading_underline">About </span> event</h1>
				</LightSpeed>
				<br />
				<h4>
				The DeepRacer League is a virtual and Physical Racing league that uses deep reinforcement learning to train autonomous vehicles that compete on a simulated racetrack. 
				</h4>
				<br />
				<h4>It is organized by KGiSL Educational Institutions, Coimbatore, Tamilnadu and is open to Academic and Industry members interested in learning about and experimenting with machine learning. 
				</h4>
				<br />
				<h4>
				Participants can train their own models using the AWS DeepRacer platform.
				</h4>
				<br />
				<h4>
				The 48 Hrs Bootcamp provides mentors, workshops and technical sessions for the participants to make their model complete the race in the minimum time period.
				</h4>
				<br />
				<Link to="contact">
					<button className="G_btn">
						<span>Contact us</span>
					</button>
				</Link>
			</div>
			<Fade right>
				<div className="about_img">
					<img src={Img} alt={Img} />


				</div>
			</Fade>
		</div>
	);
};

export default AboutUs;
