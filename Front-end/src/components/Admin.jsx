import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/admin.css";

export default function Admin() {
    const navigate = useNavigate();
    const [response, setResponse] = useState(null);
    const [file, setFile] = useState(null);
    const [dispName, setDispName] = useState('');
    const [userDetails, setUserDetails] = useState([]);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:8080/admin-dashboard', {
                    method: 'GET',
                    credentials: 'include', // This is important to send cookies with the request
                });

                if (!response.ok) {
                    navigate('/admin-login');
                } else {
                    const data = await response.json();
                    setDispName(data.dispName);
                    setUserDetails(data.userDetails);
                }
            } catch (error) {
                console.error('Error checking auth:', error);
                navigate('/admin-login');
            }
        };

        checkAuth();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formdata = new FormData();
        formdata.append('file', file);

        try {
            const res = await fetch('http://localhost:8080/admin/upload', {
                method: 'POST',
                body: formdata,
                credentials: 'include'
            });
            const data = await res.json();

            if (res.ok) {
                setResponse(data);
                setFile(null); // Clear file state after successful upload
                setTimeout(() => {
                    setResponse(null)
                    navigate("/admin/secure")
                    window.location.reload();
                }, 1000);
            } else {
                setResponse(data);
                setTimeout(() => {
                    navigate("/admin-login");
                }, 2000);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setResponse('Failed to upload file');
            setTimeout(() => {
                navigate("/admin/secure");
            }, 1000);
        }
    };

    return (
        <div className="admin-container">
            <nav className="admin-nav">
                <ul>
                    <li><Link to="/">Deepracer-3.0</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <div className="user-name">
                <h2>Welcome {dispName ? dispName : "Guest"}</h2>
                <h3>Profile</h3>
            </div>
            <div className="admin-upload">
                <h3>Upload file to get updated results.</h3>
                <div className="upload-form">
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <label className="upload-label">
                            <span className="upload-span">Choose file</span>
                            <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} className="upload-input" />
                            
                        </label>
                        <button type="submit" className="G_btn">Upload</button>
                        {file && <p style={{fontSize:"2rem"}}>Selected file: {file.name}</p>}
                        {response && <p>{response}</p>}
                    </form>

                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>User Name</th>
                            <th>Course Grade</th>
                            <th>Letter Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((user, index) => (
                            <tr key={index}>
                                <td>{user.DisplayName}</td>
                                <td>{user.UserName}</td>
                                <td>{user.CourseGrade}</td>
                                <td>{user.LetterGrade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {response && (
                <div className="response-message">
                    <h3>{response}</h3>
                </div>
            )}
        </div>
    );
}
