import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
export default function SealVerification() {

 return (
    <div className="p-grid p-justify-center p-mt-5 p-mb-5">
    <div className="p-col-12 p-md-8 p-lg-6">
        <Card 
            className="p-shadow-3" 
            title="Check-Out Documents" 
            subTitle="Please have your ID & Appointment details ready."
        >
            <div className="p-grid p-fluid">
                {/* Name */}
                <div className="p-col-12">
                    <label htmlFor="name">Name:</label>
                    <InputText id="name" value="Siva" readOnly className="p-inputtext-sm" />
                </div>
                
                {/* Driver License Id */}
                <div className="p-col-12">
                    <label htmlFor="license">Driver License Id:</label>
                    <InputText id="license" value="DL-334455667" readOnly className="p-inputtext-sm" />
                </div>
                
                {/* Truck Number */}
                <div className="p-col-12">
                    <label htmlFor="truck">Truck Number:</label>
                    <InputText id="truck" value="TN-667788" readOnly className="p-inputtext-sm" />
                </div>

                {/* Trip Id */}
                <div className="p-col-12">
                    <label htmlFor="trip">Trip Id:</label>
                    <InputText id="trip" value="AMC8" readOnly className="p-inputtext-sm" />
                </div>

                {/* Seal Id */}
                <div className="p-col-12">
                    <label htmlFor="seal">Seal Id:</label>
                    <InputText id="seal" placeholder="Enter Seal Id" className="p-inputtext-sm" />
                </div>

                {/* Upload Documents */}
                <div className="p-col-12">
                    <label htmlFor="upload">Upload Documents:</label>
                    <FileUpload 
                        name="demo[]" 
                        id="upload" 
                        customUpload 
                        uploadHandler={() => {}} 
                        className="p-fileupload-sm"
                    />
                </div>
                
                {/* Submit Button */}
                <div className="p-col-12 p-d-flex p-jc-end">
                    <Button label="Upload" className={classNames("p-button-sm", "p-mt-3")} />
                </div>
            </div>
        </Card>
    </div>
</div>
    );
}