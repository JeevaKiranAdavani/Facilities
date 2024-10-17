import React, { useEffect, useState } from "react";
import "./checkInDetail.scss";
import { useParams } from "react-router-dom";
import { Image } from "primereact/image";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Timeline } from "primereact/timeline";
import { DropdownChangeEvent } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

import { Tooltip } from 'primereact/tooltip';
        
interface City {
  name: string;
  code: string;
}
// Define the types for your component's state (you can expand these as needed)
interface TimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

interface DriverInfo {
  name: string;
  phoneNumber: string;
  license: string;
  truckNo: string;
  isVaccinated: boolean;
}

interface CheckInStatus {
  id: number;
  status: string;
  boundType: string;
}
export default function CheckInDetail() {
  const { appointmentId } = useParams();
  const [statusOptions, setStatusOptions] = useState<City | null>(null);
  const statusLookupData: City[] = [
    { name: "Review Check-In", code: "review" },
    { name: "Waiting", code: "waiting" },
    { name: "Loading", code: "loading" },
    { name: "Unloading", code: "unloading" },
    { name: "Request Documents", code: "reqDocs" },
    { name: "Request E-Signature", code: "reqESign" },
    { name: "Completed", code: "Completed" },
  ];
  const events: TimelineEvent[] = [
    {
      status: "Truck Arrived",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Driver Checked-In",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Check-In Reviewed",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Gate Open",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },

    {
      status: "Truck Entered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "WAITING",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "Docking Gate",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "REQUEST DOCUMENTS",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "DOCUMENTS UPLOADED",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "DRIVER CONFIRMATION",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
    {
      status: "COMPLETED",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
  const availableSlots = [
    { id: 1, slotNumber: 'A1' },
    { id: 2, slotNumber: 'A2' },
    { id: 3, slotNumber: 'B1' },
    { id: 4, slotNumber: 'B2' },
    { id: 5, slotNumber: 'C1' },
    { id: 6, slotNumber: 'A2' },
    { id: 7, slotNumber: 'A3' },
    { id: 8, slotNumber: 'B1' },
    { id: 88, slotNumber: 'B5' },
    { id: 45, slotNumber: 'C6' },
    { id: 13, slotNumber: 'A7' },
    { id: 244, slotNumber: 'A7' },
    { id: 33, slotNumber: 'B8' },
    { id: 445, slotNumber: 'B52' },
    { id: 52, slotNumber: 'C14' },
    { id: 133, slotNumber: 'A13' },
    { id: 222, slotNumber: 'A23' },
    { id: 313, slotNumber: 'B12' },
    { id: 4434, slotNumber: 'B22' },
    { id: 54, slotNumber: 'C11' },
    // Add more slots dynamically as needed
  ];
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    name: "John Doe",
    phoneNumber: "123-456-7890",
    license: "DL-987654321",
    truckNo: "TN-667788",
    isVaccinated: true,
  });

  const [showDialog, setVisible] = useState(false);
  const [showDockingDialog, setDockingVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);  // To track the selected chip

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  function statusChange(e: any) {
    setStatusOptions(e)
    if (e.name === 'Waiting') {
      setVisible(true)
    }
  }
  function statusChangeClick() {
    if (statusOptions?.name === 'Waiting') {
      setVisible(true)
    }
    if (statusOptions?.name === 'Loading' || statusOptions?.name === 'Unloading') {
      setDockingVisible(true)
    }
  }
  // Handle click on a chip (highlight it)
  const handleChipClick = (slot: any) => {
    setSelectedSlot(slot.id);
  };

  return (
    <>
      <div className="grid p-2">
        <div className="col-8">
          <div className="border-round-sm font-bold align-items-center">

            <Button icon="pi pi-angle-left" tooltip="Back" outlined severity="secondary" aria-label="Bookmark" size="small" className="mr-4" />
            <span className="text-2xl mr-4">Check-In <span className="textcolor">#AMC890</span></span>
            <Tag value="&nbsp;Inbound&nbsp;" rounded severity="danger" className="mr-4"></Tag>
            <Button icon="pi pi-refresh" tooltip="Refresh" rounded text severity="secondary" aria-label="Bookmark" size="small" className="mr-4" />
          </div>
        </div>
        <div className="col-4">
          <div className="text-right border-round-sm  font-bold">
          <Button label="Cancel" className="p-button-sm p-button-secondary mr-2"   />
          <Button label="Save" className="p-button-sm" severity="info" />
          </div>
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="grid-item grid-item-1 checkInInfo">
          <div className="displayFlex-wrapper">
            <div>
              <h4>Driver Information</h4>
              <div>
                <p><b>Name:</b> test</p>
                <p><b>Phone:</b> 2342342342</p>
                <p><b>License:</b> DL-2342342</p>
                <p><b>Type:</b> Inbound</p>
              </div>
            </div>
            <div>
              <h4>Appointment Information</h4>
              <div>
                <p><b>Appt Id:</b> AP-5020</p>
                <p><b>Status:</b> AP DOWNLOAD-CMPLT</p>
                <p><b>Date:</b> 05-08-2024 10:45</p>
                <p><b>Load No:</b></p>
              </div>
            </div>
            <div>
              <h4>Additional Information</h4>
              <div>
                <p><b>Test:</b> test</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-2">
          <div className="info-box  border ">
            <h4>Status</h4>
            <div className="card flex justify-content-center">
              <Dropdown
                value={statusOptions}
                onChange={(e: DropdownChangeEvent) => statusChange(e.value)}
                onHide={() => statusChangeClick()}
                options={statusLookupData}
                optionLabel="name"
                placeholder="Select Status"
                className="w-full"
              />
            </div>

            {/* <div className="card flex justify-content-center">
              <Button
              >
                Discard
              </Button>
              <Button >
                Save
              </Button>
            </div> */}
          </div>
        </div>

        <div className="grid-item grid-item-3 ">
          <b >Check-In Status</b>
          <div className="timeline-card mt-4 checkInStatus">
            {/* <Timeline value={events} content={(item) => item.status} /> */}
            <Timeline value={events} opposite={(item) => item.status}
              content={(item) => <small className="text-color-secondary">{item.date}</small>} />
          </div>
        </div>
        {/* <div className="grid-item grid-item-4">Item 4</div> */}
        <div className="grid-item grid-item-5">
          <div className="displayFlex-wrapper">
            <div>
              <h4>Trip Information</h4>
              <div>
                <b>Facility</b>
                <p><b>Name:</b> Allentown PA</p>
                <p><b>Id:</b> 80502</p>
                <p><b>Source System Code:</b> ATL</p>
              </div>
            </div>
            <div>
              <h4>&nbsp;</h4>
              <div>
                <b>Customer</b>
                <p><b>Name:</b> JOSEPH GARMET</p>
                <p><b>Status:</b> AP DOWNLOAD-CMPLT</p>

              </div>
            </div>
          </div>

        </div>
        <div className="grid-item grid-item-6">
          <b>Trip Documents</b>
          <div className="mt-4">
            <img alt="j" src=""></img>
          </div>
        </div>
      </div>

      <Dialog header="Parking Slot Allocation" visible={showDialog} style={{ width: '50vw' }} onHide={() => { if (!showDialog) return; setVisible(false); }}>
        <div className="flex flex-wrap gap-4 justify-center p-4">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              // <Chip
              //   key={slot.id}
              //   label={`Slot: ${slot.slotNumber}`}
              //   className={`cursor-pointer p-chip-success transition-all duration-300 
              //                               ${selectedSlot === slot.id ? 'bg-blue-700 text-white' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-400'}
              //                               ${selectedSlot === slot.id ? '' : 'text-black'}`}
              //   onClick={() => handleChipClick(slot)}
              // />

              <div
                key={slot.id}
                className={`cursor-pointer px-2 py-2 shadow-md transition-all duration-300 rounded-2xl
                          ${selectedSlot === slot.id ? 'bg-blue-700 text-white border border-blue-800 rounded-2xl' : 'bg-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-400 border border-gray-400 rounded-2xl'}
                          ${selectedSlot === slot.id ? 'text-white' : 'text-black'}`}
                onClick={() => handleChipClick(slot)}
              >
                <span>
                  Slot: <span className="font-bold">{slot.slotNumber}</span>
                </span>
              </div>
            ))
          ) : (
            <p className="text-center">No available slots.</p>
          )}
        </div>
        <div className="text-right mt-4">
          <Button label="Confirm" className="p-button-sm p-button-success mr-2" onClick={() => setVisible(false)} />
          <Button label="Cancel" className="p-button-sm p-button-secondary" onClick={() => setVisible(false)} />
        </div>
      </Dialog>
      
      <Dialog header="Docking Gate Allocation" visible={showDockingDialog} style={{ width: '50vw' }} onHide={() => { if (!showDockingDialog) return; setDockingVisible(false); }}>
        <div className="flex flex-wrap gap-4 justify-center p-4">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              // <Chip
              //   key={slot.id}
              //   label={`Slot: ${slot.slotNumber}`}
              //   className={`cursor-pointer p-chip-success transition-all duration-300 
              //                               ${selectedSlot === slot.id ? 'bg-blue-700 text-white' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-400'}
              //                               ${selectedSlot === slot.id ? '' : 'text-black'}`}
              //   onClick={() => handleChipClick(slot)}
              // />

              <div
                key={slot.id}
                className={`cursor-pointer px-2 py-2 shadow-md transition-all duration-300 rounded-2xl
                          ${selectedSlot === slot.id ? 'bg-blue-700 text-white border border-blue-800 rounded-2xl' : 'bg-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-400 border border-gray-400 rounded-2xl'}
                          ${selectedSlot === slot.id ? 'text-white' : 'text-black'}`}
                onClick={() => handleChipClick(slot)}
              >
                <span>
                  Gate: <span className="font-bold">{slot.slotNumber}</span>
                </span>
              </div>
            ))
          ) : (
            <p className="text-center">No available slots.</p>
          )}
        </div>
        <div className="text-right mt-4">
          <Button label="Confirm" className="p-button-sm p-button-success mr-2" onClick={() => setDockingVisible(false)} />
          <Button label="Cancel" className="p-button-sm p-button-secondary" onClick={() => setDockingVisible(false)} />
        </div>
      </Dialog>
    </>
  );
}
