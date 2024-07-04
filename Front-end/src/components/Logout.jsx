import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            // Display confirmation dialog
            const confirmLogout = window.confirm("Really want to logout?");

            if (confirmLogout) {
                try {
                    const response = await fetch('http://localhost:8080/logout', {
                        method: 'GET',
                        credentials: 'include', // This is important to send cookies with the request
                    });
                    navigate("/");
                } catch(err) {
                    console.log("Error logging out:", err);
                }
            } else {
                // User cancelled logout
                navigate(-1);

            }
        };

        logout(); // Call the logout function

    }, [navigate]);

    return (
        <div>
            {/* Additional content can be added here if needed */}
        </div>
    );
}
