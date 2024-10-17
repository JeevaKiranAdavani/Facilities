import './unauthorized.scss';
import logo from '../../assets/applogo1.png';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate('/login');
};


    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Sherwin Logo" className="logo" />
                <h2>You are Unautorized to access this page.</h2>

                <div className="signup-link">
                    <p>Please check your access with the Admin Team.</p>
                   <span onClick={loginRedirect}>Login with valid credentials.</span>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;
