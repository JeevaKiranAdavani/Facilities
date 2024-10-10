import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import logo from '../../assets/onlyicon.png';
import './layout.scss';

const Layout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sideNavItems = [
        { label: 'Dashboard', icon: 'pi pi-chart-line', to: '/dashboard' },
        { label: 'Reports', icon: 'pi pi-file', to: '/reports' },
        { label: 'Analytics', icon: 'pi pi-chart-bar', to: '/analytics' },
        { label: 'Messages', icon: 'pi pi-envelope', to: '/messages' }
    ];

    return (
        <div className={`layout-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Menubar
                className="topnav"
                model={[]}
                start={
                    <div className="topnav-left">
                        <Button 
                            icon="pi pi-bars" 
                            rounded 
                            text 
                            aria-label="Toggle Sidebar" 
                            onClick={() => setIsCollapsed(!isCollapsed)} 
                        />
                        <img src={logo} alt="Logo" className="app-logo" />
                    </div>
                }
                end={
                    <div className="topnav-right">
                        <Button 
                            icon="pi pi-sign-out" 
                            rounded 
                            text 
                            aria-label="Logout" 
                            className="topnav-item logout" 
                            onClick={() => console.log('Logout clicked')} 
                        />
                    </div>
                }
            />

            <div className="layout-body">
                <aside className={`layout-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <ul className="sidebar-menu">
                        {sideNavItems.map((item, index) => (
                            <li key={index} className="sidebar-item">
                                <Link to={item.to} className="sidebar-link">
                                    <i className={item.icon}></i>
                                    {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="layout-content">
                    <Card className="custom-card">
                        <Outlet />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Layout;
