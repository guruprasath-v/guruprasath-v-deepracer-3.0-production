import React from "react";
import Slider from "react-slick";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import judge1 from "../assets/images/judges/judge1.jpeg";
import judge2 from "../assets/images/judges/judge2.jpeg";
import judge3 from "../assets/images/judges/judge3.jpeg";

const Delivery = () => {
	const data = [
		{
			id: 1,
			name: "Navaneeth Malingan",
			description: "Director of Innovation at KGiSL Edu | Founder at Nunnari(நுண்ணறி) Labs | Enabler at AI TamilNadu Community | Expert in AI, IoT & Web Technologies",
			image: { judge1 },
			instagram: "https://www.instagram.com/nivu.me/",
			linkedin: "https://www.linkedin.com/in/nivu/",
			x: "https://twitter.com/nivu07",
			medium: "https://medium.com/@nivu07"
		},
		{
			id: 2,
			name: "Ashok Bakthavathsalam",
			description: "Investor | Promoter | Entrepreneur | Sociopreneur | Managing Director - KGiSL group of Companies & Institutions",
			image: { judge2 },
			instagram: "https://www.instagram.com/nivu.me/",
			linkedin: "https://www.linkedin.com/in/nivu/",
			x:"https://twitter.com/nivu07",
			medium: "#"
		},
		{
			id: 3,
			name: "krishnapriya P",
			description: "Director of Innovation at KGiSL Edu | Founder at Nunnari(நுண்ணறி) Labs | Enabler at AI TamilNadu Community | Expert in AI, IoT & Web Technologies",
			image: { judge3 },
			instagram: "https://www.instagram.com/nivu.me/",
			linkedin: "https://www.linkedin.com/in/nivu/",
			x:"https://twitter.com/nivu07"
		},
	];

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="deliverySlider_conatiner">
			<div className="innerDeliverySlider_conatiner">
				<LightSpeed>
					<h1>
						<span className="heading_underline">JUDGES</span>
					</h1>
				</LightSpeed>
				<br />
				<br />
				<br />
				<div className="main_slider_container">
					<Slider {...settings}>
						{data.map(item => {
							return (
								<div key={item.id} className="judges-flexes d-flex justify-center align-center w-100">
									<div className="judges-image-container">
										<img src={item.image} alt="judges" />
									</div>
									<div className="judges-content-flexes">
										<Bounce cascade>
											<div className="judges-content-flexes-column">
												<h2>{item.name}</h2>
												<h4>{item.description}</h4>
												<div>
													<a href={item.instagram}>inst</a>
													<a href={item.linkedin}>link</a>
													<a href={item.x}>x</a>
													<a href={item.medium}>medium</a>
												</div>
											</div>
										</Bounce>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
