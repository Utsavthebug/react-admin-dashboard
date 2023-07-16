import React from 'react'
import { Sidebar, Menu, MenuItem,SubMenu,sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box,IconButton,useTheme,Typography } from '@mui/material';
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from 'react';


const SidebarEl = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isCollapsed,setIsCollapsed] = useState(false)
  const [selected,setSelected] = useState('Dashboard')

  return (
    <Sidebar
    rootStyles={{
      border:'none',
      [`.${sidebarClasses.container}`]: {
        backgroundColor: `${colors.primary[400]}`,
        height:'100vh',
      },
    }}
    >
    <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
  )
}

export default SidebarEl