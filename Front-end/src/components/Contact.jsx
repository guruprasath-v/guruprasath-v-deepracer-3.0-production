import React from "react";
import Location from "../assets/location.svg";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import LightSpeed from "react-reveal/LightSpeed";
import logo from "../assets/images/edu-logo1.png"
import Fade from "react-reveal/Fade";

const Contact = () => {
	return (
		<div id="contact" className="contact_container">
			<div className="innerContact_container">
				<LightSpeed>

					<h1 className="font-sizes-title">
						<span className="heading_underline">CON</span>TACT

					</h1>
				</LightSpeed>
				
				<br />
				<br />
				<br />
				<div className="container-fluid">
					<div className="row">
						<div className="left_side col-lg-5 col-md-12 col-sm-12 mb-5">
							<Fade left cascade>
								<h3>Contact Us</h3>
								<br />
								<form>
									<input type="text" placeholder="Name" />
									<br />
									<br />
									<input type="email" placeholder="Mail" />
									<br />
									<br />
									<textarea rows="4" placeholder="Message" />
									<br />
									<br />
									<button>Submit</button>
								</form>
							</Fade>
						</div>
						<div className="offset-md-1 col-lg-6 col-md-12 col-sm-12">
							<div className="right_side">
								<Fade left cascade>
									<img className="logo2" src={logo} alt={logo} />
									<br />
									<br />
									<h5>
									The event provided a deep dive into the world of machine learning and autonomous driving. Our community core members demonstrates on how to build, train and race.
									</h5>
									<br />
									<br />
									<div className="innerRight_side">
										<div>
											<span>
												<img src={Location} alt={Location} />
											</span>
											<span>
											KGiSL Campus, 365, Thudiyalur Road,Saravanampatti, Coimbatore 641035


											</span>
										</div>
										<br />
										<div>
											<span>
												<img src={Email} alt={Email} />
											</span>
											<span><u><a href="mailto:deepracer@kgcas.in" target="blank" style={{color:'black'}}>deepracer@kgcas.in</a></u></span>
										</div>
										<br />
										<div>
											<span>
												<img src={Phone} alt={Phone} />
											</span>
											<span>+91 9787625117</span>
										</div>
										<br />
									</div>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
