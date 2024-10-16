import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import logo from '../../assets/onlyicon.png';
import './layout.scss';

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [activePage, setActivePage] = useState('Dashboard');

    const loggedInUser = {
        name: 'User',
        avatar: 'https://images.miraclesoft.com/employee-profile-pics/kvedantam.png'
    };

    const menuItems = [
        { label: 'Dashboard', icon: 'pi pi-home', to: '/home' },
        { label: 'Appointment', icon: 'pi pi-qrcode', to: '/home' },
        { label: 'Settings', icon: 'pi pi-cog', to: '/home' },
        { label: 'Warehouse', icon: 'pi pi-shop', to: '/home/supervisor' },
    ];

    const handleMenuClick = (label: string) => {
        setActivePage(label);
    };

    return (
        <div className="layout-wrapper">
            <aside className={`layout-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                    <Button 
                        icon="pi pi-bars" 
                        className="sidebar-toggle p-button-rounded p-button-text" 
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
                    />
                </div>

                <div className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <Link 
                            to={item.to} 
                            key={index} 
                            className="sidebar-item" 
                            onClick={() => handleMenuClick(item.label)}
                        >
                            <i className={item.icon}></i>
                            {!isSidebarCollapsed && <span>{item.label}</span>}
                        </Link>
                    ))}
                </div>

                <div className="sidebar-footer">
                    <img src={logo} alt="Company Logo" className="sidebar-logo" />
                </div>
            </aside>

            <div className="layout-main">
                <header className="layout-header" >
                    <h1 className="header-title animated-text">{activePage}</h1>
                    <div className="header-user">
                        <span className="username">{loggedInUser.name}</span>
                        <Avatar image={loggedInUser.avatar} size="large" shape="circle" className="avatar" />
                        <Link to="/login" className="logout-button">
                            <i className="pi pi-sign-out"></i>
                        </Link>
                    </div>
                </header>
                <div className="layout-content custom-scrollbar ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
