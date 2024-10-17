import './notFound.scss';
import logo from '../../assets/applogo1.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate('/login');
};


    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Sherwin Logo" className="logo" />
                <h2>Page Not Found</h2>

                <div className="signup-link">
                    <p>The page you are trying to access is invalid or not found</p>
                   {/* <span onClick={loginRedirect}>Login with valid credentials.</span> */}
                </div>
            </div>
        </div>
    );
};

export default NotFound;
