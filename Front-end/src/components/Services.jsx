import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import service1 from "../assets/Ml.jpg";
import service2 from "../assets/experiment-participation.jpg";
import service3 from "../assets/Win_Prizes.jpg";
import Fade from "react-reveal/Fade";


const Services = () => {
	const data = [
		{
			title: "Discovering ML",
			img: service1,
			description:
				"Skill yourself and get started on ML using KGiSL Edu LMS and AWS DeepRacer student.",
		},
		{
			title: "Experiment and Participate",
			img: service2,
			description:
				"Experiment and Participate in the racing event and summits",
			classN: "rPadding",
		},
		{
			title: "Win prizes",
			img: service3,
			description:
				"Fasten your seat belts, go full throttle, and win exciting prizes.",
		},
		
		// {
		// 	title: "Développement de produits",
		// 	img: service2,
		// 	description:
		// 		"Le faisceau laser e une colonne de lumière de très haute intensité, d'une seule longueur d'onde, ou couleur.",
		// 	classN: "rPadding",
		// },
		// {
		// 	title: "Assemblée",
		// 	img: service3,
		// 	description:
		// 		"La tôle est la base de tous les engi-neering aujourd'hui. Nous pouvons le voir partout - depuis les voitures",
		// },
	];

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<Fade bottom>
			<div id="services" className="service_container">
				<h1 className="font-sizes-title">
					<span className="heading_underline">You </span>gain
				</h1>
				<br />
				<div className="main_slider_container">
					<Slider {...settings}>
						{data.map((prev) => {
							const { img, title, description, classN } = prev;
							return (
								<ServiceCard
									title={title}
									img={img}
									description={description}
									classN={classN}
								/>
							);
						})}
					</Slider>
				</div>
			</div>
		</Fade>
	);
};

export default Services;
