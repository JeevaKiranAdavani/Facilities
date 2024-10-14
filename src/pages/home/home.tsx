import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./home.scss";
import { Orders } from "../services/Orders";

const Home = () => {

    const cardData = [
        {
          title: "Waiting",
          value: 152,
          icon: "pi pi-clock",
          iconColor: "text-blue-500",
          bgColor: "bg-blue-100",
        },
        {
          title: "InBound",
          value: 100,
          icon: "pi pi-truck",
          iconColor: "text-orange-500",
          bgColor: "bg-orange-100",
        },
        {
          title: "OutBound",
          value: 28441,
          icon: "pi pi-truck",
          iconColor: "text-cyan-500",
          bgColor: "bg-cyan-100",
          mirrored: true,
        },
        {
          title: "Appointment",
          value: 152,
          icon: "pi pi-bell",
          iconColor: "text-purple-500",
          bgColor: "bg-purple-100",
        },
      ];
    
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
       <div className="grid custom-card">
      {cardData.map((card, index) => (
        <div className="col-12 md:col-6 lg:col-3" key={index}>
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  {card.title}
                </span>
                <div className="text-900 font-medium text-xl">{card.value}</div>
              </div>
              <div
                className={`flex align-items-center justify-content-center ${card.bgColor} border-round custom-icon-card`}
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className={`${card.icon} ${card.iconColor} text-xl`}
                  style={card.mirrored ? { transform: "scaleX(-1)" } : {}}
                >    
                </i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      <div className="card">
  <div className="custom-scrollbar">
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
