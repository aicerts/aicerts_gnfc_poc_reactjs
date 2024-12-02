import React, { useState, useEffect } from "react";
import { useThemeContext } from "../components/ThemeContext";
import { Box, Snackbar } from "@mui/material";
import SideBar from "../components/Sidebar";
import RoyaltyPassGenration from "../components/RoyaltyPassGenration";
import DelivaryPassGenration from "../components/DelivaryPassGenration";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const PassGenration = () => {
  const { mode } = useThemeContext();
  const [tabName, setTabName] = useState("RP");

  const handleChange = (event, newValue) => {
    setTabName(newValue);
  };

  return (
    <>
      <TabContext value={tabName}  >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <TabList
  onChange={handleChange}
  aria-label="lab API tabs example"
  sx={{
    width: "100%", // Ensures the TabList spans the full width
    display: "flex", // Makes it a flex container
    alignItems: "center", // Aligns items vertically in the center
    justifyContent: "space-between", // Ensures equal spacing for tabs
    backgroundColor: mode === "dark" ? "#1c1c1c" : "#E5E5EF",
    paddingLeft:6,
    border:"none",
   
   
   
    "& .MuiTab-root": {
      flex: 1, // Ensures each tab takes equal space
      textAlign: "center", // Centers the tab content
      color: mode === "dark" ? "#ffffff" : "#140D49",
      

      "&.Mui-selected": {
        color: mode==="dark"? "white": "#140D49",
        border:"none"
        
      },
    },
  }}
>
  <Tab sx={{
    "&.Mui-selected":{
      fontSize:"20px",
      fontWeight:500
    }
  }} label="Issue Royalty Pass" value="RP" />
  <Tab sx={{
    "&.Mui-selected":{
      fontSize:"20px",
      fontWeight:500,
    }
  }} label="Issue Delivery Pass" value="DP" />
</TabList>

</Box>


        <TabPanel
          value="RP"
          style={{ background: mode === "dark" ? "#1c1c1c" : "#E5E5EF" }}
          sx={{
            '&.Mui-selected': {
              borderBottom: "3px solid #140D49", // Custom border for the selected tab
            },
          }}
        >
          <RoyaltyPassGenration />
        </TabPanel>
        <TabPanel
          value="DP"
          style={{ background: mode === "dark" ? "#1c1c1c" : "#E5E5EF" }}
        >
          <DelivaryPassGenration />
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
      {/* <h3>hello</h3> */}
      {/* <Box display="flex" width="100%" height="100%" py={3} bgcolor={mode === 'dark' ? '#1c1c1c' : '#E5E5EF'} pr={5}> */}

      {/* Conditional Rendering based on role */}
      {/* {(role === 'Admin' || role === 'Leaser') && (tabName==='RP' ? : <DelivaryPassGenration />)} */}
      {/* </Box> */}
    </>

  );
};

export default PassGenration;
