import React from "react";
import example1 from "../assets/images/gal1.JPG";
import example2 from "../assets/images/gal2.JPG";
import example3 from "../assets/images/gal3.JPG";
import example4 from "../assets/images/gal4.JPG";
import example5 from "../assets/images/gal5.JPG";
import example6 from "../assets/images/gal6.JPG";
import ExampleCard from "./ExampleCard";
import LightSpeed from "react-reveal/LightSpeed";

const Examples = () => {
	const data = [
		{ img: example1},
		{ img: example2},
		{ img: example3},
		{ img: example4},
		{ img: example5},
		{ img: example6},
	];

	return (
		<div className="examples_container">
			<div className="innerExamples_container">
				<LightSpeed>
					<h1 className="font-sizes-title">
						<span className="heading_underline">GALLERY</span>
					</h1>
				</LightSpeed>
				<div className="container-fluid">
					<div className="row">
						{data.map((prev) => {
							const {img } = prev;
							return <ExampleCard img={img}  />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Examples;
