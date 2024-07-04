import {  useState } from "react";
import "../App.css";
import Header from "./Header.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Manufacturing from "./Manufacturing";
// import DeliveryDetails from "./components/DeliveryDetails";
import Examples from "./Examples";
// import StartUp from "./components/StartUp";
// import Delivery from "./components/Delivery";
import OurWork from "./OurWork";
import WhyChooseUS from "./WhyChooseUS";
import Contact from "./Contact";
import Footer from "./Footer";
import Application from "./Application";
// import Material from "./components/Material";
import Sidebar from "./Sidebar";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const OnClick = () => {
		setIsOpen(!isOpen);
	};


    return(
        <div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<WhyChooseUS />
			<AboutUs />
			<Services />
			<Manufacturing />
			<Examples />
			<Application />
			<OurWork />
			{/* <Delivery /> */}
			<Contact />
			<Footer />
		</div>
    )
}