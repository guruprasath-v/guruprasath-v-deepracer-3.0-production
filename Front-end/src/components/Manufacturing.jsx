import React from "react";
import Slider from "react-slick";
import ManufacturingCard from "./ManufacturingCard";
import Manufacturing1 from "../assets/images/winner_img1.jpg";
import Manufacturing2 from "../assets/images/winner_img.jpg";
// import Manufacturing3 from "../assets/images/winner_img2.jpg";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

const Manufacturing = () => {
	const data = [
		{
			title: "Ms.Kousipriya(CHAMPION)",
			year: "2022",
			img: Manufacturing1,
			description:
				"KGISL Institute of Technology,Coimbatore",
		},
		{
			title: "Mr. Madhana Bala(1ST RUNNER UP)",
			year: "2022",
			img: Manufacturing2,
			description:
				"Sri Krishna College of Engineering and Technology",
		},
		// {
		// 	title: "Aarthy R",
		// 	year: "2022",
		// 	img: Manufacturing3,
		// 	description:
		// 		"KGISL Institute of Technology,Coimbatore",
		// },
		// {
		// 	title: "Ms.Kousipriya(CHAMPION)",
		// 	year: "2021",
		// 	img: Manufacturing1,
		// 	description:
		// 		"KGISL Institute of Technology,Coimbatore",
		// },
		// {
		// 	title: "Mr. Madhana Bala(1ST RUNNER UP)",
		// 	year: "2021",
		// 	img: Manufacturing2,

		// 	description:
		// 		"Sri Krishna College of Engineering and Technology",
		// },
		// {
		// 	title: "Aarthy R",
		// 	year: "2021",
		// 	img: Manufacturing3,
		// 	description:
		// 		"KGISL Institute of Technology,Coimbatore",
		// },
	];

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 710,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
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
			<div className="manufacturing_container">
				<LightSpeed>
					<h1 className="font-sizes-title">
						<span className="heading_underline">Previous</span> Winners
					</h1>
				</LightSpeed>
				
				<br />
				<br />
				<div className="main_slider_container">
					<Slider {...settings}>
						{data.map((prev) => {
							const { img, year,  title, description } = prev;
							return (
								<ManufacturingCard
									title={title}
									year={year}
									img={img}
									description={description}
								/>
							);
						})}
					</Slider>
				</div>
			</div>
		</Fade>
	);
};

export default Manufacturing;
