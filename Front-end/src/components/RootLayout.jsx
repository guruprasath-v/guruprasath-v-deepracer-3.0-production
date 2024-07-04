import { useEffect, useState } from "react";

import Lottie from "react-lottie";
import animationData from "../assets/loader-animation.json";
import { Outlet } from "react-router-dom";
export default function Rootlayout(){
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

    return(
        <>
            {
                loading ? (
                    <div class="animator">
                        <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: animationData,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                          }
                        }}
                        height="500px"
                        width="400px"
                                      />
                    </div>
                ) : (
                    <Outlet />
                )
                
            
                
            }
            
        </>
    )
}