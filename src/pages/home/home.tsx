import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./home.scss";
import { Orders } from "../services/Orders";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  useEffect(() => {
    Orders
.getCustomersMedium().then((data: any) =>
      setCustomers(data)
    );
  }, []);
  const handleView = (rowData:any) => {
    console.log("Row data:", rowData);
   
  };
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
      <div className="card">
  <div >
    <DataTable
      value={customers}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
     
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      paginatorLeft={paginatorLeft}
      paginatorRight={paginatorRight}
      scrollable
    //   scrollHeight="400px" 
    //   responsiveLayout="scroll" 
    >
      <Column sortable  field="name" header="Name" style={{ width: "15%" }}></Column>
      <Column sortable  field="type" header="Type" style={{ width: "15%" }}></Column>
      <Column sortable  field="appointmentId" header="Status" style={{ width: "20%" }}></Column>
      <Column sortable  field="status" header="Appointment" style={{ width: "20%" }}></Column>
      <Column
        sortable  field="representative.name"
        header="Action"
        style={{ width: "15%" }} 
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
