import React from "react";
// import Arrow from "../assets/arrow.svg";
import HashLoader from "react-spinners/HashLoader";

const ServiceCard = ({ title, img, description, classN }) => {
	return (
		<div className="serviceCard_container">
			<div className="img_container">
				{img ? (
					<figure class="snip0023">
						<img src={img} style={{height:"20rem"}} alt="sample26" />
						<div>
							<div class="curl"></div>
							<div class="text">
								<div>
									<h4>{title}</h4>
								</div>
							</div>
						</div>
					</figure>
				) : (
					<HashLoader color="#7dcb3b" size={80} />
				)}
				{/* <img src={img} alt={img} /> */}
			</div>
			<div className={`body_text ${classN}`}>
				<h3> {title} </h3>
				<h6>{description}</h6>
				<button>
					{/* <span>
						<img src={Arrow} alt={Arrow} />
					</span> */}
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
