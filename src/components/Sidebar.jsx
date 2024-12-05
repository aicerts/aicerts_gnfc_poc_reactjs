import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';


import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Button, Switch } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import { useThemeContext } from './ThemeContext';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const drawerWidth = 310;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9.5)} + 1px)`,
  },
});




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
   
    
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('/dashboard');  // Default selected tab
  const [hovered, setHovered] = React.useState(false);

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    window.location.reload()
  }

  const { toggleTheme, mode } = useThemeContext();
  const location = useLocation();

React.useEffect(() => {
    setSelected(location.pathname); // Update selected based on current path
}, [location.pathname]);

    // Function to handle tab click
    const handleListItemClick = (path) => {
      setSelected(path);
    }

  return (
    <>
    <Box  >
      <CssBaseline />
      
      <Drawer variant="permanent" open={open} sx={{
       
    '& .MuiDrawer-paper': {
      backgroundColor: mode === 'dark' ? '#343434' : '#fff', // Change the colors as per your design
      color: mode === 'dark' ? '#fff' : '#000',  
           // Adjust text color
    },
  }} >

     <Box display={"flex"} alignItems={"center"} p={2}  >
      <img src= {mode === "dark" ? "public/logos/Certs365+GNFC Logo_with Dark BG_01.png": "public/logos/Certs365+GNFC Logo_01.png"} alt="" height={60} width={"280px"} />
   
   
     </Box>
  
        <Divider /> 
        <List sx={{marginTop:"10px"}}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem key={"dashboard"} disablePadding sx={{ display: 'block' ,paddingX:"10px" }}>
       
        <ListItemButton
  onClick={() => handleListItemClick('/dashboard')}
  sx={{
    backgroundColor: selected === '/dashboard' 
      ? theme.palette.mode === 'dark' 
        ? '#444444' // Dark mode active panel color
        : '#F5F5F5' // Light mode active panel color
      : 'transparent',  
    color: selected === '/dashboard' ? '#140D49' : 'black',
    minHeight: 48,
    borderLeft: selected === '/dashboard' 
      ? `3px solid ${theme.palette.mode === 'dark' ? '#6c63ff' : '#140D49'}` 
      : '',
  }}
>
  <ListItemIcon
    sx={{
      color: theme.palette.mode === 'dark' ? 'white' : '#140D49', // Icon color based on theme
    }}
  >
    <HomeIcon />
  </ListItemIcon>
  <ListItemText
    primary={"Dashboard"}
    style={{
      color: theme.palette.mode === 'dark' ? 'white' : '#140D49', // Icon color based on theme
    }}
    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
  />
</ListItemButton>
            </ListItem>
            </Link>
        </List>
        <List >
        <Link to="/pass-details" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem key={"pass-details"} disablePadding sx={{ display: 'block', paddingX:"10px"  }}>
       
              <ListItemButton
                onClick={() => handleListItemClick('/pass-details')}
                sx={{
                  backgroundColor: selected === '/pass-details' 
                    ? theme.palette.mode === 'dark' 
                      ? '#444444' // Dark mode active panel color
                      : '#F5F5F5' // Light mode active panel color
                    : 'transparent',  
                  color: selected === '/pass-details' ? '#140D49' : 'black',
                  minHeight: 48,
                  borderLeft: selected === '/pass-details' 
                    ? `3px solid ${theme.palette.mode === 'dark' ? '#6c63ff' : '#140D49'}` 
                    : '',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: theme.palette.mode === 'dark' ? 'white' : '#140D49', // Icon color based on theme
                  }}
                >
                  <InsertChartIcon />
                </ListItemIcon>
              
                <ListItemText
                  primary={"Pass Details"}
                  style={{
                    color: theme.palette.mode === 'dark' ? 'white' : '#140D49', // Icon color based on theme
                  }}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              
              </ListItemButton>
            
            </ListItem>
            </Link>
        </List>
        <Divider />
        <Box sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
        {/* <Divider sx={{ marginBottom: "10px" }} /> */}
        <List sx={{marginTop:"10px"}}>
        <ListItem key={"dashboard"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
               onClick={handleLogout}
               sx={{
                marginX:"10px",
                 backgroundColor: theme.palette.mode ==="dark"? "none": '#F5F5F5',
                 color: theme.palette.mode === "dark" ? "white": "#140D49",
                 minHeight: 48,
                 px: 2.5,
               
                
               
               }}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                 <LogoutIcon sx={{ color: theme.palette.mode === "dark"? "white": "#140D49" }}
 />
                </ListItemIcon>
               
                <ListItemText
                  primary={"Logout"}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
             
              </ListItemButton>
            </ListItem>
        </List>

        <List>
            <ListItem key={"view mode"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={toggleTheme} // Call toggleTheme here
                sx={{
                  marginX: "10px",
                  backgroundColor: theme.palette.mode ==="dark"? "none": '#F5F5F5',
                  color: theme.palette.mode === "dark" ? "white": "#140D49",
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon>
                  <WbIncandescentIcon sx={{ color: theme.palette.mode === "dark"? "white": "#140D49" }} />
                </ListItemIcon>
                <ListItemText
                  primary={`View Mode`} // Show the current mode
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          </List>

        {/* Logout Button */}
     
      </Box>
     
      </Drawer>
      
    </Box>
    <IconButton
  onClick={() => setOpen(!open)}
  sx={{
    position: "absolute",
    top: "50%",
    left: open ? `${drawerWidth - 20}px` : "60px",
    transform: "translateY(-50%)",
    backgroundColor: mode === "dark" ? "#444444" : "white",
    color: mode === "dark" ? "#fff" : "#000",
    zIndex: theme.zIndex.drawer + 1,
    transition: "left 0.3s ease-in-out", // Add transition to 'left' property
    '&:hover': {
      backgroundColor: mode === "dark" ? "#555555" : "#e0e0e0",
      
    },
    border:"none",
      outline:"none",
  }}
>
  {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
</IconButton>

     
    </>
  );
}
