import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import logo from '../../assets/onlyicon.png';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './checkin.scss';
const Checkin = () => {
    const [username, setUsername] = useState('');
    const [inboundOutbound, setInboundOutbound] = useState('inbound');
    const [appointmentNumber, setAppointmentNumber] = useState('');
    const [appointmentDocumentUrl, setAppointmentDocumentUrl] = useState<File | null>(null);
    const [licenseDocumentUrl, setLicenseDocumentUrl] = useState<File | null>(null);
    const [truckNumber, setTruckNumber] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!username) newErrors.username = 'Username is required';
        if (!inboundOutbound) newErrors.inboundOutbound = 'Inbound/Outbound is required';
        if (!appointmentNumber) newErrors.appointmentNumber = 'Appointment number is required';
        if (!truckNumber) newErrors.truckNumber = 'Truck number is required';
        if (!appointmentDocumentUrl) newErrors.appointmentDocumentUrl = 'Appointment document is required';
        if (!licenseDocumentUrl) newErrors.licenseDocumentUrl = 'License document is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckin = () => {
        if (!validateForm()) return;

        console.log({
            username,
            inboundOutbound,
            appointmentNumber,
            appointmentDocumentUrl,
            licenseDocumentUrl,
            truckNumber,
        });

        navigate('/home');
    };

    const onUpload = (files: File[]) => {

    };

    return (
        <div className="checkin-container">
            <div className="checkin-box">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Check In</h2>

                <div className="input-group">
                    <InputText
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    {errors.username && <small className="error-message">{errors.username}</small>}
                </div>
                <div className="input-group">
                    <InputText
                        value={truckNumber}
                        onChange={(e) => setTruckNumber(e.target.value)}
                        placeholder="Enter your truck number"
                    />
                    {errors.truckNumber && <small className="error-message">{errors.truckNumber}</small>}
                </div>
                <div className="input-group">
                    <InputText
                        value={appointmentNumber}
                        onChange={(e) => setAppointmentNumber(e.target.value)}
                        placeholder="Appointment Number"
                    />
                    {errors.appointmentNumber && <small className="error-message">{errors.appointmentNumber}</small>}
                </div>

                <div className="toggle-buttons">
                    <Button
                        label="Inbound"
                        className={`toggle-button ${inboundOutbound === 'inbound' ? 'active' : ''}`}
                        onClick={() => setInboundOutbound('inbound')}
                    />
                    <Button
                        label="Outbound"
                        className={`toggle-button ${inboundOutbound === 'outbound' ? 'active' : ''}`}
                        onClick={() => setInboundOutbound('outbound')}
                    />
                </div>

                <div className="input-group file-upload-group">
                    <label htmlFor="appointmentDocument">Appointment Document Upload</label>
                    <Button
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-text choose-button"
                        onClick={() => document.getElementById('appointmentUpload')?.click()}
                    />
                    <input
                        type="file"
                        id="appointmentUpload"
                        style={{ display: 'none' }}
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => e.target.files && onUpload(Array.from(e.target.files))}
                    />
                    {errors.appointmentDocumentUrl && <small className="error-message">{errors.appointmentDocumentUrl}</small>}
                </div>

                <div className="input-group file-upload-group">
                    <label htmlFor="licenseDocument">License Document Upload</label>
                    <Button
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-text choose-button"
                        onClick={() => document.getElementById('licenseUpload')?.click()}
                    />
                    <input
                        type="file"
                        id="licenseUpload"
                        style={{ display: 'none' }}
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => e.target.files && onUpload(Array.from(e.target.files))}
                    />
                    {errors.licenseDocumentUrl && <small className="error-message">{errors.licenseDocumentUrl}</small>}
                </div>


                <Button label="Check In" onClick={handleCheckin} className="checkin-button" />
            </div>
        </div>
    );
};

export default Checkin;
