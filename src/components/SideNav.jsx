import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BalanceIcon from '@mui/icons-material/Balance';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import './SideNav.scss'

const SideNav = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <Sidebar collapsed={collapsed}>
        <button onClick={handleToggleSidebar}><MenuIcon/></button>
        

        <Menu>
          <MenuItem component={<Link to={"/"}/>} icon={<Home />}>Home</MenuItem>
          <MenuItem icon={<AdminPanelSettingsIcon/>}>Admin</MenuItem>
          <MenuItem icon={<CardMembershipIcon />}>Membership</MenuItem>
          <MenuItem icon={<BalanceIcon />}>Advocate</MenuItem>

          
        </Menu>
        <Menu>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>

        </Menu>
      </Sidebar>
    );
}

export default SideNav