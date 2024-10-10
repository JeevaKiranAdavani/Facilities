import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import './layout.scss';

const Layout: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const topNavItems = [
        { label: 'Home', icon: 'pi pi-home', command: () => window.location.href = '/' },
        { label: 'Profile', icon: 'pi pi-user', command: () => console.log('Profile clicked') },
        { label: 'Settings', icon: 'pi pi-cog', command: () => console.log('Settings clicked') },
        { label: 'Logout', icon: 'pi pi-sign-out', command: () => console.log('Logout clicked') }
    ];

    const sideNavItems = [
        { label: 'Dashboard', icon: 'pi pi-chart-line', to: '/dashboard' },
        { label: 'Reports', icon: 'pi pi-file', to: '/reports' },
        { label: 'Analytics', icon: 'pi pi-chart-bar', to: '/analytics' },
        { label: 'Messages', icon: 'pi pi-envelope', to: '/messages' }
    ];

    return (
        <div className="layout-container">
            <Menubar
                className="topnav"
                model={topNavItems}
                start={<div className="logo">Facilities</div>}
                end={<Button icon="pi pi-bars" onClick={() => setSidebarVisible(true)} />}
            />

            <Sidebar
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
                className="layout-sidebar"
                showCloseIcon={false}
            >
                <div className="sidebar-header">Navigation</div>
                <ul>
                    {sideNavItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>
                                <i className={item.icon}></i>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Sidebar>

            <div className="layout-content">
                <Outlet />
            </div>

        </div>
    );
};

export default Layout;
