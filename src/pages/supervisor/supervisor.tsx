import { render } from "@testing-library/react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";
import { Orders } from "../services/Orders";

export default function Supervisor() {
    const [supervisor_data, setSupervisor_data] = useState([]);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    useEffect(() => {
        Orders
.getCustomersMedium().then((data: any) =>
      setSupervisor_data(data)
    );
    }, []);

    const handleView = (rowData:any) => {
      // navigate("/home/view-checkins")
     
    }

    return(
        <div>
            <div>Supervisor screen</div>
            <div>
            <DataTable
      value={supervisor_data}
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
      <Column field="name" header="Name" style={{ width: "15%" }}></Column>
      <Column sortable  field="type" header="Type" style={{ width: "15%" }}></Column>
      <Column field="appointmentId" header="Appointment" style={{ width: "20%" }}></Column>
      <Column sortable  field="status" header="Status" style={{ width: "20%" }}></Column>
      <Column
        field="representative.name"
        header="Action"
     
        className="action-column"
        body={(rowData) => (
            <Button label="Edit" className="bgColor" onClick={() => handleView(rowData)} />
        )}
    />
</DataTable>
            </div>
        </div>
    )
}