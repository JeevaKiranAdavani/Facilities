import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import logo from '../../assets/applogo.jpg'
import './layout.scss';

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [activePage, setActivePage] = useState('Home');

    const loggedInUser = {
        name: 'John Doe',
        avatar: '/assets/user-avatar.png'
    };

    const menuItems = [
        { label: 'Home', icon: 'pi pi-home', to: '/home' },
        { label: 'Users', icon: 'pi pi-users', to: '/users' },
        { label: 'Reports', icon: 'pi pi-chart-line', to: '/reports' },
        { label: 'Settings', icon: 'pi pi-cog', to: '/settings' }
    ];

    const handleMenuClick = (label:any ) => {
        setActivePage(label);
    };

    return (
        <div className="layout-wrapper">
            <aside className={`layout-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Button 
                    icon="pi pi-bars" 
                    className="sidebar-toggle p-button-rounded p-button-text" 
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
                />

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

                <div className="sidebar-user">
                    <Avatar image={loggedInUser.avatar} size="large" shape="circle" />
                    {!isSidebarCollapsed && <span className="username">{loggedInUser.name}</span>}
                </div>

                <Link to="/logout" className={`sidebar-item logout-button ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                    <i className="pi pi-sign-out"></i>
                    {!isSidebarCollapsed && <span className="logout-text" style={{marginLeft: '10px'}}>Logout</span>}
                </Link>
            </aside>

            <div className="layout-main">
                <header className="layout-header">
                    {/* <img src={logo} alt="Company Logo" className="header-logo" /> */}
                    {/* <h1 >{activePage}</h1> */}
                </header>
                <div className="layout-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
