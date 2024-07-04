import React from "react";
import Bounce from "react-reveal/Bounce";

import { ImCross } from "react-icons/im";

import { Link } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<Bounce left cascade>
				<ul>
					<li>
						<Link
							activeClass="activeNav"
							to="header"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="aboutUs"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="application"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Journey
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="WCU_container"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Eligibility
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="contact"
							smooth={true}
							duration={600}
							spy={true}
							offset={-105}
							onClick={ClickEvent}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="footer"
							smooth={true}
							duration={600}
							spy={true}
							offset={-105}
							onClick={ClickEvent}
						>
							Login
						</Link>
					</li>
				</ul>
			</Bounce>
		</div>
	);
};

export default Sidebar;
