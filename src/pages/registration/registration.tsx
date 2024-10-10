// src/pages/Signup.tsx
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import logo from '../../assets/onlyicon.png'; 
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { useNavigate } from 'react-router-dom';
import './registration.scss';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [truckNumber, setTruckNumber] = useState('');
    const [licenseDocument, setLicenseDocument] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // Perform signup logic here (e.g., API call)
        console.log({
            username,
            phoneNumber,
            truckNumber,
            licenseDocument,
            password,
        });
        // Navigate to the home page after successful signup
        navigate('/home');
    };

    const onUpload = (files: any) => {
        setLicenseDocument(files[0]); // Assuming only one file upload for license document
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
            <img src={logo} alt="Sherwin Logo" className="logo" />
                <h2>Sign Up</h2>
                
                <div className="input-group">
                    <InputText 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Enter your username" 
                    />
                </div>

                <div className="input-group">
                    <InputText 
                        id="phoneNumber" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="Enter your phone number" 
                    />
                </div>

                <div className="input-group">
                    <InputText 
                        id="truckNumber" 
                        value={truckNumber} 
                        onChange={(e) => setTruckNumber(e.target.value)} 
                        placeholder="Enter your truck number" 
                    />
                </div>
                <div className="input-group">
                    <InputText 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        type="password" 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="licenseDocument">License Document Upload</label>
                    <FileUpload 
                        mode="basic" 
                        name="licenseDocument" 
                        accept="application/pdf,application/vnd.ms-excel" // Accept PDF and Excel files
                        maxFileSize={1000000} // 1MB max size
                        onUpload={onUpload} 
                    />
                </div>

             

                <Button label="Sign Up" onClick={handleSignup} className="signup-button" />
            </div>
        </div>
    );
};

export default Registration;
