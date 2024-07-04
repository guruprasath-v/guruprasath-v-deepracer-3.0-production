import React from "react";
import choose1 from "../assets/choose1.svg";
import choose2 from "../assets/choose2.svg";
import choose3 from "../assets/choose3.svg";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

const WhyChooseUS = () => {
	return (
		<div className="WCU_container">
			<LightSpeed>
				<h1 className="font-sizes-title">
					<span className="heading_underline">ELIGIBILITY</span> 
				</h1>
			</LightSpeed>
			<br />
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					<div className="choose_card col-lg-4 col-md-6 col-sm-12">
						<Fade right cascade>
							<img src={choose1} alt={choose1} />
							<br />
							<br />
							<h3>Students currently enrolled with a recognized academic institute</h3>
						</Fade>
					</div>
					<div className="choose_card col-lg-4 col-md-6 col-sm-12">
						<Fade big>
							<img src={choose2} alt={choose1} />
							<br />
							<br />
							<h3>Students above 18 years in age.</h3>
						</Fade>
					</div>
					<div className="choose_card col-lg-4 col-md-6 col-sm-12  mb-5">
						<Fade left cascade>
							<img src={choose3} alt={choose1} />
							<br />
							<br />
							<h3>Industry Professionals</h3>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUS;
