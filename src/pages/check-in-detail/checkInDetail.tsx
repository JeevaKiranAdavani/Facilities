import React, { useEffect, useState } from 'react'
import "./checkInDetail.scss";
import { useParams } from 'react-router-dom';

// Define the types for your component's state (you can expand these as needed)
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
  const {appointmentId} = useParams();
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    license: 'DL-987654321',
    truckNo: 'TN-667788',
    isVaccinated: true,
  });
  const [status, setStatus] = useState<string>('WAITING');
  const [boundType, setBoundType] = useState<string>('Outbound');
  const [id, setId] = useState<number>(1); // Mock ID, in real-world scenario you might get this via props or routing

  // Mock data fetching (replace with actual API call)
  useEffect(() => {
    // Simulate fetching driver info and check-in status
    const fetchData = async () => {
      // This would be an API call to fetch data
      const fetchedDriverInfo = {
        name: 'Prasanth Sankurabothu',
        phoneNumber: '987-654-3210',
        license: 'DL-987654321',
        truckNo: 'TN-667788',
        isVaccinated: true,
      };
      const fetchedStatus = 'LOADING'; // Example status
      setDriverInfo(fetchedDriverInfo);
      setStatus(fetchedStatus);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
        const response = await fetch(`/api/users/${id}`); // Replace with your actual API endpoint
        const data = await response.json();
        console.log(data); // Handle your data (e.g., set it to state)
    };

    fetchUserData();
}, [id]);
  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with status:', status);

    // Perform the update, possibly via an API call
    // Example:
    // await fetch('/api/updateStatus', { method: 'POST', body: JSON.stringify({ id, status }) });
  };

  return (
  <div>
    <h1>Driver Check-in</h1>
    <div className="container">
  <div className="item item1"></div>
  <div className="item item2"></div>
  <div className="item item3"></div>
  <div className="item item4"></div>
</div>
  </div>
  );
}
