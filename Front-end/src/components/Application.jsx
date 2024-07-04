
import React, { useState, useEffect, useMemo } from "react";
import { Parallax } from "react-parallax";
import plx_image from "../assets/bg-car.png";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Registration } from "../assets/car-icon.svg";
import { ReactComponent as Learning } from "../assets/car-icon.svg"; 
import { ReactComponent as VirtualLeague } from "../assets/car-icon.svg"; 
import { ReactComponent as Bootcamp } from "../assets/car-icon.svg"; 
import { ReactComponent as GrandFinale } from "../assets/car-icon.svg"; 
import LightSpeed from "react-reveal/LightSpeed";


const timelineData = [
	{
		id: 1,
		title: "Registration",
		icon: "Registration",
		buttonText: "Register",
		date:{
			start: [30, 4, 2024],
			end: [15, 6, 2024]
		},
		description:
			"Everyone who registers for the event will participate in this race.",
	},
	{
		id: 2,
		title: "Learning",
		icon: "Learning",
		date:{
			start: [1, 5, 2024],
			end: [1, 7, 2024]
		},
		description:
			"Complete the course and push yourself to virtual league.",
	},
	{
		id: 3,
		title: "Virtual League",
		icon: "VirtualLeague",
		date:{
			start: [3, 7, 2024],
			end: [18, 7, 2024]
		},
		description:
			"A virtual Race will be conducted and teams will be selected for GRAND FINALE.",
	},
	{
		id: 4,
		title: "Bootcamp",
		icon: "Bootcamp",
		date:{
			start: [26, 7, 2024],
			end: [27, 7, 2024]
		},
		description:
			"The event features mentoring, workshops, technical sessions, and a live track.",
	},
	{
		id: 5,
		title: "Grand Finale",
		icon: "GrandFinale",
		date:{
			start: [28, 7, 2024],
			end: [28, 7, 2024]
		},
		description:
			"Selected finalists will participate in the Grand Finale. Top 3 racers will be declared as winners of AWS Deepracer League 2024",
	},
  // Your timeline data here
];

function getIcon(icon, style) {
  switch (icon) {
    case 'Registration':
      return (
	  	<Registration style={style}/>
	);
    case 'Learning':
      return (
	  	<Learning style={style}/>
	);
    case 'VirtualLeague':
      return (
	  	<VirtualLeague style={style}/>
	);
    case 'Bootcamp':
      return (
	  	<Bootcamp style={style}/>
	);
    case 'GrandFinale':
      return (
	  	<GrandFinale style={style}/>
	);
    default:
      return null; // Return null for unknown icons or handle accordingly
  }
}

function Application() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };
    updateDate();
    const intervalId = setInterval(updateDate, 2 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  const CustomDate = ({ startDate, endDate, style }) => {
	const dateStyle = {
	  fontSize: '2rem', // Default font size
	  ...style, // Merge with the provided style prop
	};
  
	return (
	  <div className="custom-date" style={dateStyle}>
		{`${startDate[0]}-${startDate[1]}-${startDate[2]} to ${endDate[0]}-${endDate[1]}-${endDate[2]}`}
	  </div>
	);
  };
  

  

  const memoizedIcons = useMemo(() => {
    return timelineData.map((item, index) => {
		
		const itemInRange = currentDate >= new Date(item.date.start[2], item.date.start[1] - 1, item.date.start[0]) &&
      		currentDate <= new Date(item.date.end[2], item.date.end[1] - 1, item.date.end[0]);

		return(
			<VerticalTimelineElement
				key={index}
				className="vertical-timeline-element--work"
				contentStyle={{ background: itemInRange ? '#603F83FF' : '#C7D3D4FF', color: itemInRange ? '#000' : '#000'}}
				contentArrowStyle={{ borderRight: `7px solid ${itemInRange ? '#603F83FF' : '#C7D3D4FF'}` }}
				date={
					<CustomDate
					  className="custom-date"
					  startDate={item.date.start}
					  endDate={item.date.end}
					  style={{ fontSize: '1.5rem' }}
					/>
				}
				dateClassName="custom-date"
				iconStyle={{ background: itemInRange ? '#282828' : '#C7D3D4FF'}}
				icon={ getIcon(item.icon, { filter: itemInRange ? 'grayscale(0%)' : 'grayscale(100%)', transform:'scale(1.5)', color:'#fff' }) }
			>
				<h3 className="vertical-timeline-element-title">{item.title}</h3>
				<p id="description">{item.description}</p>
				{item.buttonText && <a href="https://bit.ly/deepracer3" target="blank"><button className="G_btn_timeline"><span>Register</span></button></a>}
			</VerticalTimelineElement>
		)
	});
  }, [ currentDate]);

  return (
    <div>
      <Parallax strength={600} bgImage={plx_image}>
        <div className="overlay"></div>
        <div className="content-plx container rightSide-text h-75 ">
			<LightSpeed>
				<h1 className="font-sizes-title" style={{color:"white"}}><span className="heading_underline">Journey </span> through the league</h1>
			</LightSpeed>
          <VerticalTimeline>{memoizedIcons}</VerticalTimeline>
        </div>
      </Parallax>
    </div>
  );
}

export default Application;
