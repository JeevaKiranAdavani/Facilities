import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './driver_status.scss';

const DriverStatus = () => {
    const tableData = [
        { id: 1, type: 'Inbound', status: 'Active', appointmentId: 'A1234', truckId: 'TX200' },
        { id: 2, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 3, type: 'Inbound', status: 'Active', appointmentId: 'A1234', truckId: 'TX200' },
        { id: 4, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 5, type: 'Inbound', status: 'Active', appointmentId: 'A1234', truckId: 'TX200' },
        { id: 6, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 7, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 8, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 9, type: 'Inbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 10, type: 'Inbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 11, type: 'Outbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
        { id: 12, type: 'Inbound', status: 'Completed', appointmentId: 'A5678', truckId: 'TX300' },
    ];

    const navigate = useNavigate();

    const cardData = [
        { title: 'Rejected', value: 152, icon: 'pi pi-times', iconColor: 'text-red-500', bgColor: 'bg-red-100' },
        { title: 'InBound', value: 100, icon: 'pi pi-truck', iconColor: 'text-orange-500', bgColor: 'bg-orange-100' },
        { title: 'OutBound', value: 28441, icon: 'pi pi-truck', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-100', mirrored: true },
        { title: 'OnHold', value: 12, icon: 'pi pi-hourglass', iconColor: 'text-blue-500', bgColor: 'bg-blue-100' },
        { title: 'Appointment', value: 152, icon: 'pi pi-bell', iconColor: 'text-purple-500', bgColor: 'bg-purple-100' },
    ];

    return (
        <div className="driver-status-container">
            <div className="grid custom-card">
                {cardData.map((card, index) => (
                    <div className="col-12 md:col-6 lg:col-2" key={index}>
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">{card.title}</span>
                                    <div className="text-900 font-medium text-xl">{card.value}</div>
                                </div>
                                <div className={`flex align-items-center justify-content-center ${card.bgColor} border-round custom-icon-card`} style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className={`${card.icon} ${card.iconColor} text-xl`} style={card.mirrored ? { transform: 'scaleX(-1)' } : {}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="table-card">
                <Card title="Driver Status" className="table-card-content">
                    <div className="table-container">
                        <DataTable value={tableData} responsiveLayout="scroll">
                            <Column field="id" header="#" />
                            <Column field="type" header="Type" />
                            <Column field="status" header="Status" />
                            <Column field="appointmentId" header="Appointment ID" />
                            <Column field="truckId" header="Truck ID" />
                        </DataTable>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DriverStatus;
