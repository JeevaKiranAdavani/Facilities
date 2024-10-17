import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './appointment.scss'; 
import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const Appointment = () => {
   
    const location = useLocation();

    // Form state for all three forms
    const [appointmentDetails, setAppointmentDetails] = useState({
        appointmentId: Math.floor(Math.random() * 100000).toString(), // Convert to string
        initialStatus: '',
        appointmentDate: null as Date | null,
        loadNumber: ''
    });

    const [facilities, setFacilities] = useState({
        warehouseId: '',
        name: '',
        location: ''
    });

    const [customerDetails, setCustomerDetails] = useState({
        customerName: '',
        customerId: ''
    });

    // Handle the form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Appointment Details:', appointmentDetails);
        console.log('Facilities:', facilities);
        console.log('Customer Details:', customerDetails);
        alert('Form Submitted');
    };

  

    return (
        <div className="appointment-container">

            <h2>Appointment Details</h2>
            
            {/* Forms Section */}
            <form className="forms-container" onSubmit={handleSubmit}>
                
                {/* Form 1: Appointment Details */}
                <div className="form-section">
                    <h3>Appointment Details</h3>
                    <div className="p-field">
                        <label htmlFor="appointmentId">Appointment ID (Auto-generated)</label>
                        <InputText id="appointmentId" value={appointmentDetails.appointmentId} disabled />
                    </div>
                    <div className="p-field">
                        <label htmlFor="initialStatus">Initial Status</label>
                        <InputText id="initialStatus" value={appointmentDetails.initialStatus} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, initialStatus: e.target.value })} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="appointmentDate">Appointment Date</label>
                        <Calendar
                            id="appointmentDate"
                            value={appointmentDetails.appointmentDate}
                            onChange={(e) => setAppointmentDetails({
                                ...appointmentDetails,
                                appointmentDate: e.value ? e.value : null
                            })}
                            showIcon
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="loadNumber">Load Number</label>
                        <InputText id="loadNumber" value={appointmentDetails.loadNumber} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, loadNumber: e.target.value })} />
                    </div>
                </div>

                {/* Form 2: Facilities */}
                <div className="form-section">
                    <h3>Facilities</h3>
                    <div className="p-field">
                        <label htmlFor="warehouseId">Warehouse ID</label>
                        <InputText id="warehouseId" value={facilities.warehouseId} onChange={(e) => setFacilities({ ...facilities, warehouseId: e.target.value })} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="facilityName">Name</label>
                        <InputText id="facilityName" value={facilities.name} onChange={(e) => setFacilities({ ...facilities, name: e.target.value })} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="location">Location</label>
                        <InputText id="location" value={facilities.location} onChange={(e) => setFacilities({ ...facilities, location: e.target.value })} />
                    </div>
                </div>

                {/* Form 3: Customer Details */}
                <div className="form-section">
                    <h3>Customer Details</h3>
                    <div className="p-field">
                        <label htmlFor="customerName">Customer Name</label>
                        <InputText id="customerName" value={customerDetails.customerName} onChange={(e) => setCustomerDetails({ ...customerDetails, customerName: e.target.value })} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="customerId">Customer ID</label>
                        <InputText id="customerId" value={customerDetails.customerId} onChange={(e) => setCustomerDetails({ ...customerDetails, customerId: e.target.value })} />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-submit">
                    <Button label="Submit" type="submit" className="p-button-primary" />
                </div>
            </form>
        </div>
    );
};

export default Appointment;
