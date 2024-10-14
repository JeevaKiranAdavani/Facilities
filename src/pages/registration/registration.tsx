// src/pages/Signup.tsx
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import logo from '../../assets/onlyicon.png';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './registration.scss';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [truckNumber, setTruckNumber] = useState('');
    const [licenseDocument, setLicenseDocument] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!username) newErrors.username = 'Username is required';
        if (!phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!truckNumber) newErrors.truckNumber = 'Truck number is required';
        if (!password) newErrors.password = 'Password is required';
        if (!licenseDocument) newErrors.licenseDocument = 'License document is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSignup = () => {
        if (!validateForm()) return; // Stop if validation fails

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

    const onUpload = (files: File[]) => {
        setLicenseDocument(files[0]); // Assuming only one file upload for the license document
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
                    {errors.username && <small className="error-message">{errors.username}</small>}
                </div>

                <div className="input-group">
                    <InputText
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && <small className="error-message">{errors.phoneNumber}</small>}
                </div>

                <div className="input-group">
                    <InputText
                        id="truckNumber"
                        value={truckNumber}
                        onChange={(e) => setTruckNumber(e.target.value)}
                        placeholder="Enter your truck number"
                    />
                    {errors.truckNumber && <small className="error-message">{errors.truckNumber}</small>}
                </div>

                <div className="input-group">
                    <InputText
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        type="password"
                    />
                    {errors.password && <small className="error-message">{errors.password}</small>}
                </div>

                <div className="input-group file-upload-group">
                    <label htmlFor="licenseDocument">License Document Upload</label>
                    <Button
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-text choose-button"
                        onClick={() => document.getElementById('fileUpload')?.click()}
                    />
                    <input
                        type="file"
                        id="fileUpload"
                        style={{ display: 'none' }}
                        accept="application/pdf,application/vnd.ms-excel" // Accept PDF and Excel files
                        onChange={(e) => e.target.files && onUpload(Array.from(e.target.files))}
                    />
                </div>

                {errors.licenseDocument && <small className="error-message">{errors.licenseDocument}</small>}
                <Button label="Sign Up" onClick={handleSignup} className="signup-button" />
            </div>
        </div>
    );
};

export default Registration;
