import React from "react";
// import work1 from "../assets/work1.svg";
// import work2 from "../assets/work2.svg";
// import work3 from "../assets/work3.svg";
import work4 from "../assets/images/partnerlogo3.png";
import work5 from "../assets/images/parrtnerlogo1.png";
import work6 from "../assets/images/partnerlogo2.png";
import work7 from "../assets/partner-ai-cbe.jpg";
import work8 from "../assets/partner-aws.png";
import work9 from "../assets/partner-kgcas.png"
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";

const OurWork = () => {
	const data = [
		/* work1, work2, work3, work4, */ work5,
		work7,
		work4,
		work9,
		work8,
		work6,
	];

	return (
		<div className="ourWork_container">
			<LightSpeed>
				<h1>
				OUR <span className="heading_underline"> PARTNERS</span> 
				</h1>
			</LightSpeed>
			<br />
			<br />
			<h5>
			We extend our technology and business capabilities through a powerful ecosystem of market leaders and innovators.
			</h5>
			<br />
			<br />
			<br />
			<div className="container">
				<div className="row">
					{data.map((prev) => {
						return (
							<div className="container work_card col-lg-4 col-md-3 col-sm-6 col-6 d-flex justify-center align-center ">
								<Flip left cascade>
									<img style={{filter:'grayscale(100%)'}} src={prev} alt={prev} />
								</Flip>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurWork;
