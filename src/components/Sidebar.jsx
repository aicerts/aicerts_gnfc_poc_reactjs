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

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Button, Switch } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import { useThemeContext } from './ThemeContext';

const drawerWidth = 260;

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
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

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

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    window.location.reload()
  }

  const { toggleTheme, mode } = useThemeContext();

    // Function to handle tab click
    const handleListItemClick = (path) => {
      setSelected(path);
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer variant="permanent" open={open}>
     <Box display={"flex"} alignItems={"center"}>
      <Box onClick={() => setOpen(!open)} bgcolor={"#140D49"} p={1} borderRadius={3} mx={1}>
        <Typography variant='h5' color='white' fontWeight={700}>
          GC

        </Typography>
      </Box>
   
  <Typography
  variant="h6"
  sx={{
    fontSize: "24px", // Adjust font size as needed
    color: mode==="dark"?"white": "#140D49", // Set the desired color
    fontWeight: 700, // Optional: adjust font weight
    whiteSpace: "pre-wrap", // Allows line breaks with \n
    paddingLeft:"10px"

  }}
>
  GNFC/{"\n"}CERTS365
</Typography>
     </Box>
  
        <Divider />
        <List sx={{marginTop:"10px"}}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem key={"dashboard"} disablePadding sx={{ display: 'block' ,paddingX:"10px" }}>
       
              <ListItemButton
               onClick={() => handleListItemClick('/dashboard')}
               sx={{
               
                 backgroundColor: selected === '/dashboard' ? '#F5F5F5' : 'transparent',  // Change background color for selected tab
                 color:selected === '/dashboard' ? '#140D49' : 'black',
                 minHeight: 48,
               
                 borderLeft: selected ==="/dashboard"?"3px solid #140D49 ":""
                
               
               }}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                    
                     
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
                 <HomeIcon sx={{ color: mode==="dark"?"black": "#140D49 !important" }}
 />
                </ListItemIcon>
               
                <ListItemText
                  primary={"Dashboard"}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
             
              </ListItemButton>
             
            </ListItem>
            </Link>
        </List>
        <List >
        <Link to="/manage-leasers" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem key={"manage-leasers"} disablePadding sx={{ display: 'block', paddingX:"10px"  }}>
       
              <ListItemButton
                onClick={() => handleListItemClick('/manage-leaser')}
                sx={{
                
                  backgroundColor: selected === '/manage-leaser' ? '#F5F5F5' : 'transparent',  // Change background color for selected tab
                  color:selected === '/manage-leaser' ? '#140D49' : 'black',
                  minHeight: 48,
                   borderLeft: selected ==="/manage-leaser"?"3px solid #140D49 ":""
                
                
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
                  <InsertChartIcon sx={{ color: "#140D49 !important" }} />
                </ListItemIcon>
              
                <ListItemText
                  primary={"Issuance"}
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
                 backgroundColor: '#F5F5F5',
                 color:  '#140D49',
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
                 <LogoutIcon sx={{ color: "#140D49 !important" }}
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
                  backgroundColor: '#F5F5F5',
                  color: '#140D49',
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon>
                  <WbIncandescentIcon sx={{ color: "#140D49 !important" }} />
                </ListItemIcon>
                <ListItemText
                  primary={`View Mode: ${mode === 'light' ? 'Light' : 'Dark'}`} // Show the current mode
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          </List>

        {/* Logout Button */}
     
      </Box>
     
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
         
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          
        </Typography>
      </Box>
    </Box>
  );
}
