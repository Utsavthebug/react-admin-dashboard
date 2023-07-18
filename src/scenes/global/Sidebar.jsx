import React from 'react'
import { Sidebar, Menu, MenuItem,SubMenu,sidebarClasses,menuClasses } from 'react-pro-sidebar';
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


const Item = ({title,to,icon,selected,setSelected})=>{
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)

   return (
    <MenuItem
    component={<Link to={to} />}
    active={selected===title}
    icon={icon}
    rootStyles={{
      color:colors.grey[100],
      height:'40px'
    }}
    onClick={()=>setSelected(title)}
    >
    <Typography>{title}</Typography>
    
    </MenuItem>
   )
}


const SidebarEl = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isCollapsed,setIsCollapsed] = useState(false)
  const [selected,setSelected] = useState('Manage Team')

  return (
    <Sidebar
    collapsed={isCollapsed}
    rootStyles={{
      border:'none',
      height:'100vh',
      [`.${sidebarClasses.container}`]: {
        backgroundColor: `${colors.primary[400]}`,
      },
    }}
    >
    <Menu
    menuItemStyles={{
      button: {
        padding: "5px 35px 5px 20px",
        [`&:hover`]: {
          color: '#868dfb',
          background:'transparent'
        },
        [`&.active`]: {
          color: '#6870fa',
        },
      },
    }}
    >
           <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0px 20px 0px",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        
        {
          !isCollapsed && (
            <Box mb={"10px"}>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img width={70} height={70} style={{cursor:'pointer',borderRadius:'50%'}}  src={'../../R.jpg'} alt="profile-user" />
              </Box>

              <Box textAlign={"center"}>
                <Typography variant='h4' color={colors.grey[100]} fontWeight={"bold"} sx={{m:'10px 0 0 0'}} >Utsav</Typography>
                <Typography variant='h6' color={colors.greenAccent[500]}>Admin Dashboard</Typography>
                </Box>

            </Box>
          )
        }
  
  {/* Menu Items */}

  <Box paddingLeft={isCollapsed ? undefined : '10%'} >
          <Item 
          title={"Dashboard"}
          to={"/"}
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

        <Typography
        variant='h6'
        color={colors.grey[300]}
        sx={{m:"15px 0 0px 20px"}}
        >
          Data
        </Typography>
        <Item 
          title={"Manage Team"}
          to={"/team"}
          icon={<PeopleOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

        
        <Item 
          title={"Contacts Information"}
          to={"/contacts"}
          icon={<ContactsOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

        
        <Item 
          title={"Invoices Balances"}
          to={"/invoices"}
          icon={<ReceiptOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

      
      <Typography
        variant='h6'
        color={colors.grey[300]}
        sx={{m:"15px 0 5px 20px"}}
        >
          Pages
        </Typography>
          <Item 
          title={"Profile Form"}
          to={"/form"}
          icon={<PersonOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />
  
         <Item 
          title={"Calendar"}
          to={"/calendar"}
          icon={<CalendarTodayOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

        
        <Item 
          title={"FAQ Page"}
          to={"/faq"}
          icon={<HelpOutlineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />


        < Typography
        variant='h6'
        color={colors.grey[300]}
        sx={{m:"15px 0 0 20px"}}
        >
          Charts
        </Typography>
        <Item 
          title={"Bar Chart"}
          to={"/bar"}
          icon={<BarChartOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

      
          <Item 
          title={"Pie Chart"}
          to={"/team"}
          icon={<PieChartOutlineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />



        <Item 
          title={"Line Chart"}
          to={"/line"}
          icon={<TimelineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />

          
        <Item 
          title={"Geography Chart"}
          to={"/geography"}
          icon={<MapOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />














  </Box>

  </Menu>
</Sidebar>
  )
}

export default SidebarEl