import React, { useEffect, useState } from "react";
import "./checkInDetail.scss";
import { useParams } from "react-router-dom";
import { Image } from "primereact/image";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Timeline } from "primereact/timeline";
import { DropdownChangeEvent } from "primereact/dropdown";

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
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const events: TimelineEvent[] = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    name: "John Doe",
    phoneNumber: "123-456-7890",
    license: "DL-987654321",
    truckNo: "TN-667788",
    isVaccinated: true,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="grid-wrapper">
        <div className="grid-item grid-item-1">
          <div className="displayFlex-wrapper">
            <div>
              <h4>Driver Information</h4>
              <div>
                <p>Name: test</p>
                <p>Phone: 2342342342</p>
                <p>License: DL-2342342</p>
                <p>Type: Inbound</p>
              </div>
            </div>
            <div>
              <h4>Appointment Information</h4>
              <div>
                <p>Appt Id: AP-5020</p>
                <p>Status: AP DOWNLOAD-CMPLT</p>
                <p>Date: 05-08-2024 10:45</p>
                <p>Load No:</p>
              </div>
            </div>
            <div>
              <h4>Additional Information</h4>
              <div>
                <p>Test: test</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-2">
          <div className="info-box  border ">
            <h4>Status</h4>
            <div className="card flex justify-content-center">
              <Dropdown
                value={selectedCity}
                onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-3">
          <div className="timeline-card">
            <Timeline value={events} content={(item) => item.status} />

          </div>
        </div>
        {/* <div className="grid-item grid-item-4">Item 4</div> */}
        <div className="grid-item grid-item-5">
          <div className="displayFlex-wrapper">
        <div>
              <h4>Trip Information</h4>
              <div>
                <p>Name : Allentown PA</p>
                <p>Id : 80502</p>
                <p>ource System Code : ATL</p>
              </div>
            </div>
            <div>
              <h4>Customer</h4>
              <div>
                <p>Name : BUCHI KOMBUCHA</p>
                <p>Status: AP DOWNLOAD-CMPLT</p>
              
              </div>
            </div>
            </div>
         
        </div>
        <div className="grid-item grid-item-6">Item 6</div>
      </div>
    </>
  );
}
