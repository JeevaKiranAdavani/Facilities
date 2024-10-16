import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Chart } from 'primereact/chart';
import { Fieldset } from 'primereact/fieldset';
import './home.scss';
import { Orders } from '../services/Orders';
import { useNavigate } from 'react-router-dom';

interface Customer {
  id: number;
  name: string;
  type: string;
  appointmentId: string;
  status: string;
  avatarUrl?: string;
}

const Home: React.FC = () => {
  const cardData = [
    {
      title: 'Waiting',
      value: 152,
      icon: 'pi pi-clock',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'InBound',
      value: 100,
      icon: 'pi pi-truck',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'OutBound',
      value: 28441,
      icon: 'pi pi-truck',
      iconColor: 'text-cyan-500',
      bgColor: 'bg-cyan-100',
      mirrored: true,
    },
    {
      title: 'OnHold',
      value: 12,
      icon: 'pi pi-hourglass',
      iconColor: 'text-red-500',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Appointment',
      value: 152,
      icon: 'pi pi-bell',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ];

  const [customers, setCustomers] = useState<Customer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    Orders.getCustomersMedium().then((data: any) => setCustomers(data));
  }, []);

  const handleView = (rowData: Customer) => {
    navigate("/home/view-checkins");
  };

  const handleViewData=()=>{
    navigate("/home/view-checkins")
  }

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
      datasets: [
        {
          label: 'Inbound',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [100, 120, 140, 130, 150, 160, 170],
        },
        {
          label: 'Outbound',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [80, 90, 110, 120, 130, 140, 150],
        },
        {
          label: 'Waiting',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          yAxisID: 'y2',
          tension: 0.4,
          data: [40, 30, 50, 60, 55, 70, 75],
        },
        {
          label: 'On Hold',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          yAxisID: 'y3',
          tension: 0.4,
          data: [20, 25, 30, 20, 15, 10, 5],
        },
        {
          label: 'Appointments',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--purple-500'),
          yAxisID: 'y4',
          tension: 0.4,
          data: [60, 70, 80, 90, 100, 110, 120],
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
        y2: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
        y3: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
        y4: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const topFiveCustomers = customers.slice(0, 5);

  return (
    <div>
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
      <div className="card">
        <div className="grid">
          <div className="col-12 md:col-6">
            <Fieldset legend="Status Chart">
              <div style={{ position: 'relative', height: '400px' }}>
                <Chart type="line" data={chartData} options={chartOptions} />
              </div>
            </Fieldset>
          </div>
          <div className="col-12 md:col-6">
            <Fieldset legend="Recent Check-In's">
              <div className="card">
                <DataTable value={topFiveCustomers}>
                  <Column
                    header="Avatar"
                    body={(rowData) => {
                      if (rowData.avatarUrl) {
                        return (
                          <img
                            src={rowData.avatarUrl}
                            alt={rowData.name}
                            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                          />
                        );
                      } else {
                        const initial = rowData.name.charAt(0).toUpperCase();
                        const backgroundColor = '#3C2D79';

                        return (
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              backgroundColor: backgroundColor,
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              fontSize: '16px',
                            }}
                          >
                            {initial}
                          </div>
                        );
                      }
                    }}
                  />
                  <Column field="name" header="Name" sortable />
                  <Column field="type" header="Type" sortable />
                  <Column field="appointmentId" header="Appointment ID" sortable />
                  <Column field="status" header="Status" sortable />
                  {/* <Column body={(rowData) =>
                    <Button icon="pi pi-user" rounded className='bgColor'  onClick={() => handleView(rowData)} />} /> */}
                </DataTable>
              </div>
              <Button  outlined  style={{color:'#094679',borderRadius:'50px',marginLeft:'35px'}} icon="pi pi-users"  badge="50+"  badgeClassName="p-badge-success" label="View All" onClick={handleViewData} />
            </Fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
