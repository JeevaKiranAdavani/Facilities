import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./home.scss";
import { Orders } from "../services/Orders";
import { useNavigate } from 'react-router-dom';
import { Card } from "primereact/card";
const Home = () => {
  const [customers, setCustomers] = useState([]);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  const navigate = useNavigate();
  useEffect(() => {
    Orders
.getCustomersMedium().then((data: any) =>
      setCustomers(data)
    );
  }, []);
  const handleView = (rowData:any) => {
    // navigate("/home/view-checkins")
   
  };
  const handleViewData=()=>{
    navigate("/home/view-checkins")
  }
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Waiting</span>
                <div className="text-900 font-medium text-xl">152</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-clock text-blue-500 text-xl"></i>
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">InBound</span>
                <div className="text-900 font-medium text-xl">100</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-truck text-orange-500 text-xl"></i>
              </div>
            </div>
          
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  OutBound
                </span>
                <div className="text-900 font-medium text-xl">28441</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-truck text-cyan-500 text-xl"></i>
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Appointment
                </span>
                <div className="text-900 font-medium text-xl">152 </div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-purple-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-bell text-purple-500 text-xl"></i>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="viewall">
      <Card title="Check-in Details"  className="custom-card">
            <div className="flex justify-content-between align-items-center">
                {/* Left or center content */}
                <div>
                    <p>Some check-in details .</p>
                </div>

                {/* Button on the right */}
                <div>
                    <Button label="View All" icon="pi pi-eye" className="bgColor" onClick={handleViewData} />
                </div>
            </div>
        </Card>
        </div>
        <div className="card">
      <div className="datatable-responsive-wrapper">
      <DataTable
    value={customers} resizableColumns showGridlines tableStyle={{ minWidth: '10rem' }}
    paginator
    rows={5}
    rowsPerPageOptions={[5, 10, 25, 50]}
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    paginatorLeft={paginatorLeft}
    paginatorRight={paginatorRight}
    scrollable
    responsiveLayout="scroll"
>
    <Column sortable field="name" header="Name"  className="name-column" />
    <Column sortable field="type" header="Type"  className="type-column" />
    <Column sortable field="appointmentId" header="Appointment" className="appointment-column" />
    <Column sortable field="status" header="Status" className="status-column" />
    <Column
        field="representative.name"
        header="Action"
     
        className="action-column"
        body={(rowData) => (
            <Button label="View" className="bgColor" onClick={() => handleView(rowData)} />
        )}
    />
</DataTable>



      </div>
    </div>

    </div>
  );
};

export default Home;
