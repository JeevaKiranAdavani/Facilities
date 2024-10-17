import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";
import { Orders } from "../services/Orders";
import { TabPanel, TabView } from "primereact/tabview";
import { useNavigate } from "react-router-dom";

export default function Supervisor() {
  const [supervisor_data, setSupervisor_data] = useState([]);
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  const navigate = useNavigate();
  useEffect(() => {
    Orders.getCustomersMedium().then((data: any) => setSupervisor_data(data));
  }, []);

  const handleView = (rowData: any) => {
      navigate("/home/seal-details/sealVerification")
  };

  return (
    <div>
      <div>
        <TabView>
          <TabPanel header="Inbound">
            <DataTable
              value={supervisor_data}
              paginator
              rows={10}
              showGridlines
              rowsPerPageOptions={[5, 10, 25, 50]}
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
              scrollable
              //   scrollHeight="400px"
              //   responsiveLayout="scroll"
            >
              <Column field="name" header="Driver Name"></Column>
              <Column field="type" header="Type"></Column>
              <Column field="sealId" header="Seal #"></Column>
              <Column field="status" header="Status"></Column>
              <Column field="appointmentId" header="Appointment #"></Column>
              <Column
                field="representative.name"
                header="Action"
                className="action-column"
                body={(rowData) => (
                  <Button
                    link
                    label="Edit"
                    onClick={() => handleView(rowData)}
                  />
                )}
              />
            </DataTable>
          </TabPanel>
          <TabPanel header="Outbound">
            <DataTable
              value={supervisor_data}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
              scrollable
              //   scrollHeight="400px"
              //   responsiveLayout="scroll"
            >
              <Column field="name" header="Driver Name"></Column>
              <Column sortable field="type" header="Type"></Column>
              <Column field="sealId" header="#Seal"></Column>
              <Column sortable field="status" header="Status"></Column>
              <Column field="appointmentId" header="Appointment"></Column>
              <Column
                field="representative.name"
                header="Action"
                className="action-column"
                body={(rowData) => (
                  <Button
                    link
                    label="Edit"
                    onClick={() => handleView(rowData)}
                  />
                )}
              />
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
