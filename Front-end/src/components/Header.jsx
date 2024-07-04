import React from "react";

import Logo from "../assets/kgisl-logo.png";
import aws_educate_logo from "../assets/images/AWS_Educate_Logo_01.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useEffect} from "react";



// import ProgressiveImage from "react-progressive-image";
// import Img from "../assets/heroImg (1)-min-min (1).png";



import videoSrc from "../assets/deppracer-home-baclground.mp4";
import aws_deepracer_badge from "../assets/aws-badge.png";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faRunning,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";


const Header = ({ ClickEvent }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".NavbarContainer");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div>
        <div id="header" className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="NavbarContainer">
                <div>
                  <Link to="header" smooth={true} duration={600}>
                    <img className="image-logo" style={{height:'4.5vh', width:'2.5vw'}} src={Logo} alt={Logo} />
                  </Link>
                </div>
  
                <div>
                  <div onClick={ClickEvent} className="NavbarToggleBtn">
                    <button className="navbar-toggler collapsed" type="button">
                      <span className="menu-btn d-inline-block" id="menu-btn">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </span>
                      <span className="ion-navicon"></span>
                    </button>
                  </div>
                  <ul className="">
                    <Link
                      activeClass="activeNav"
                      to="header"
                      smooth={true}
                      duration={600}
                      spy={true}
                    >
                      <li className="fs-2 fw-semibold">Home</li>
                    </Link>
                    <Link
                      activeClass="activeNav"
                      to="aboutUs"
                      smooth={true}
                      duration={600}
                      spy={true}
                    >
                      <li className="fs-2 fw-semibold">About</li>
                    </Link>
                    <Link
                      activeClass="activeNav"
                      to="application"
                      smooth={true}
                      duration={600}
                      spy={true}
                    >
                      <li className="fs-2 fw-semibold">Journey</li>
                    </Link>
                    <Link
                      activeClass="activeNav"
                      to="WCU_container"
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-120}
                    >
                      <li className="fs-2 fw-semibold">Eligibility</li>
                    </Link>
                    <Link
                      activeClass="activeNav"
                      to="contact"
                      smooth={true}
                      duration={600}
                      spy={true}
                    >
                      <li className="fs-2 fw-semibold">Contact</li>
                    </Link>
                    <NavLink
                      activeClass="activeNav"
                      to="/dashboard"
                      
                      duration={600}
                      
                      offset={-105}
                    >
                      <li className="fs-2 fw-semibold">Dashboard</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="aws-logo">
                  <Link to="header" smooth={true} duration={600}>
                    <img src={aws_educate_logo} alt={aws_educate_logo} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <ProgressiveImage delay={400} src={Img} placeholder={Img}> */}
          {/* {(src, loading) => ( */}
  
          <div className="home_container">
            <div className="overlay">overlay</div>
  
            <video src={videoSrc} autoPlay loop muted></video>
  
            <div className="home_outer_body position-absolute">
              <div className="home_body">
                <div className="home-logo">
                  <img src={aws_deepracer_badge} alt={aws_deepracer_badge} />
                </div>
                <div className="home_body_inner">
                  
                    <h1 style={{fontSize:'7vw'}}>
                      <Zoom right cascade><span className="deepracer">DEEP</span></Zoom>
                      <Zoom left cascade><span className="deepracer">RACER</span></Zoom>
                      <Zoom right cascade><span className="ms-2 ms-sm-5">3.0</span></Zoom>
                    </h1>
                  
  
                  <div>
                    <h4 className="sub-hero">
                      The race towards the future begins now ...
                    </h4>
                  </div>
                  <ul className="sec-sub-hero">
              <li>
              Ready <FontAwesomeIcon className="hovering-animator" icon={faCheckCircle} size="2xs" />
              </li>
              <li>
              Set <FontAwesomeIcon className="hovering-animator" icon={faRunning} size="2xs" />
              </li>
              <li>
              Go <FontAwesomeIcon className="hovering-animator" icon={faFlagCheckered} size="2xs" />
              </li>
            </ul>
                  <div>
            <a href="https://bit.ly/deepracer3" target="blank">
              <button class="G_btn">
                <span>Register</span>
              </button>
            </a>
            {/* <div style={{position:"fixed", zIndex:'1',backgroundColor:"black", margin:"20vh 0vh 0vh 75vw"}}>
              <img src={qr_code} alt={qr_code} height="90rem" width="90rem" style={{scale:'1.5'}}/>
          </div> */}
          </div>
                </div>
              </div>
            </div>
  
            {/* <div className="position-absolute bg-red container">
              <h1>Deepracer</h1>
            </div> */}
          </div>
          
          {/* )}
          </ProgressiveImage> */}
        </div>
      </div>
    );

};

  

  

export default Header;
