import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import sealImage from '../../../assets/seal.jpg'
export default function SealVerification() {
    const [sealverification, setSealverification] = useState(true)
    return (
        <>

            {/* Seal Upload Verification block */}
            {!sealverification && (
            <div className="p-grid p-justify-center p-mt-5 p-mb-5">
                <div className="p-col-12 p-md-8 p-lg-6">
                    <Card className="md:w-full p-shadow-3"
                        title="Check-Out Documents"
                        subTitle="Please have your ID & Appointment details ready."
                    >
                        <div className="p-grid p-fluid">
                            {/* Name */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="name"><b>Driver Name:</b> Jack Daniels</label>
                            </div>

                            {/* Driver License Id */}
                            <div className="p-col-12  mb-2">
                                <label htmlFor="license"><b>Driver License Id:</b> DL-334455667</label>
                            </div>

                            {/* Truck Number */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="truck"><b>Truck Number:</b> TN-667788</label>
                            </div>

                            {/* Trip Id */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="trip"><b>Trip Id:</b> AMC8</label>
                            </div>

                            {/* Seal Id */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="seal" className='font-bold'>Seal Id:</label>
                                <InputText id="seal" placeholder="Enter Seal Id" className="p-inputtext-sm" />
                            </div>

                            {/* Upload Documents */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="upload" className='font-bold'>Upload Seal Documents:</label>
                                <FileUpload
                                    name="demo[]"
                                    id="upload"
                                    uploadHandler={() => { }}
                                    customUpload
                                    auto
                                    className="p-fileupload-sm"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="p-col-12 md:col-12 lg:col-2  lg:col-offset-10">
                                <Button label="Upload" className="p-button-sm mt-3" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            )}
            {/* Seal Verification block */}
            {sealverification && (
            <div className="p-grid p-justify-center p-mt-5 p-mb-5">
                <div className="p-col-12 p-md-8 p-lg-6">
                    <Card
                        className="p-shadow-3"
                        title="Seal Verification"
                        subTitle="Please verify the Seal ID and details."
                    >
                        <div className="p-grid p-fluid">
                  {/* Name */}
                  <div className="p-col-12 mb-2">
                                <label htmlFor="name"><b>Driver Name:</b> Jack Daniels</label>
                            </div>

                            {/* Driver License Id */}
                            <div className="p-col-12  mb-2">
                                <label htmlFor="license"><b>Driver License Id:</b> DL-334455667</label>
                            </div>

                            {/* Truck Number */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="truck"><b>Truck Number:</b> TN-667788</label>
                            </div>

                            {/* Trip Id */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="trip"><b>Trip Id:</b> AMC8</label>
                            </div>

                            {/* Seal Id */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="seal"><b>Seal Id:</b> CH-455-18902</label>
                            </div>

                            {/* Seal Image */}
                            <div className="p-col-12 mb-2">
                                <label className='font-bold'>Seal Image:</label>
                                <br></br>
                                <img src={sealImage} alt="Seal" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} className='mt-2' />
                            </div>

                            {/* Comments */}
                            <div className="p-col-12 mb-2">
                                <label htmlFor="comments" className='font-bold'>Comments:</label>
                                <InputTextarea id="comments" rows={3} invalid={false} placeholder="Enter comments here" className="p-inputtextarea-sm" />
                            </div>

                            {/* Submit Button */}
                            <div className="p-col-12 md:col-12 lg:col-2  lg:col-offset-10">
                                <Button label="Submit" className="p-button-sm mt-3" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            )}
        </>
    );
}