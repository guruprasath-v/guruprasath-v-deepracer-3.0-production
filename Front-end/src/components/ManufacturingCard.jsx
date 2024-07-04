import React from "react";
// import Arrow from "../assets/arrow.svg";

const ManufacturingCard = ({ title,year, img, description }) => {
	return (
		<div className="manufacturingCard_container">
			<div className="img_container">
				<img src={img} alt={img} />
			</div>
			<div className="body_text">
				<h4><b>{year}</b></h4>
				<h4> {title} </h4>

				<h5>{description}</h5>
				<button>
					{/* <span>
						<img src={Arrow} alt={Arrow} />
					</span> */}
				</button>
			</div>
		</div>
	);
};

export default ManufacturingCard;
