import React from "react";
import Logo from "../assets/logo.svg";
import logo from "../assets/images/edu-logo1.png"


const Footer = () => {
	return (
		<div>
			<div id="footer" className="footer_container">
				<div className="innerFooter_container">
					<div className="row p-4"> 
							<iframe  title="map-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.383335051896!2d76.99583421480351!3d11.0847814921127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f792636f82b5%3A0xdc86449e9fb48675!2sKGiSL%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1622096188678!5m2!1sen!2sin" width="80%" height="100%" className="map"  loading="lazy"></iframe>    
					</div>
					<div className="left_side">
						<img className="logo" src={logo} alt={Logo} />
						<br />
						<br />
						<h5>
						K for coKreation and G for Geniuses, KGiSL Education is all about providing students with a learning experience that transforms them into geniuses.
						</h5>
					</div>
					<div className="col foot-icons d-flex flex-column align-items-center pt-4 "> 
						<h3>Follow Us on</h3>
								<a href="https://www.facebook.com/kitetechcollege"           target="_blank" rel="noreferrer" ><img src="https://edu.kgisl.com/wp-content/themes/landing/assets/imag/fb.png" alt=""/></a>
								<a href="https://www.instagram.com/kitetechcollege"          target="_blank" rel="noreferrer"><img src="https://edu.kgisl.com/wp-content/themes/landing/assets/imag/ins.png" alt=""/></a>
								<a href="https://www.linkedin.com/school/kitetechcollege"    target="_blank" rel="noreferrer"><img src="https://edu.kgisl.com/wp-content/themes/landing/assets/imag/linkedin.png" alt=""/></a>
								<a href="https://twitter.com/kitetechcollege"  				 target="_blank" rel="noreferrer"><img src="https://edu.kgisl.com/wp-content/themes/landing/assets/imag/twitter.png" alt=""/></a>
								<a href="https://www.youtube.com/c/kitetechcollege"  		 target="_blank" rel="noreferrer"><img src="https://edu.kgisl.com/wp-content/themes/landing/assets/imag/youtube.png" alt=""/></a>
					</div>	 
				</div>
				<div className="footerstyle">
                	<p>Copyright &copy; 2024 KGISL Educational Institutions. <span>All rights reserved.</span> </p>
            	</div>
			</div>
		</div>
	);
};

export default Footer;
