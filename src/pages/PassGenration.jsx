import React, { useState, useEffect } from "react";
import { useThemeContext } from "../components/ThemeContext";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RoyaltyPassGenration from "../components/RoyaltyPassGenration";
import DelivaryPassGenration from "../components/DelivaryPassGenration";

const PassGenration = () => {
  const { mode } = useThemeContext();
  const [tabName, setTabName] = useState("DP"); // Default tab for non-admin roles
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Retrieve role from localStorage
    const userRole = localStorage.getItem("role");
    setRole(userRole);
    if (userRole === "Admin" || userRole === "Leaser") {
      setTabName("RP"); // Set default tab to RoyaltyPassGenration for Admin/Leaser
    }
  }, []);

  const handleChange = (event, newValue) => {
    setTabName(newValue);
  };

  return (
    <>
      {role === "Admin" || role === "Leaser" ? (
        <TabContext value={tabName}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: mode === "dark" ? "#1c1c1c" : "#E5E5EF",
                paddingLeft: 6,
                border: "none",
                "& .MuiTab-root": {
                  flex: 1,
                  textAlign: "center",
                  color: mode === "dark" ? "#ffffff" : "#140D49",
                  "&.Mui-selected": {
                    color: mode === "dark" ? "white" : "#140D49",
                    border: "none",
                  },
                },
              }}
            >
              <Tab
                sx={{
                  "&.Mui-selected": {
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
                label="Royalty Pass"
                value="RP"
              />
              <Tab
                sx={{
                  "&.Mui-selected": {
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
                label="Delivery Pass"
                value="DP"
              />
            </TabList>
          </Box>

          <TabPanel
            value="RP"
            style={{ background: mode === "dark" ? "#1c1c1c" : "#E5E5EF" }}
          >
            <RoyaltyPassGenration />
          </TabPanel>
          <TabPanel
            value="DP"
            style={{ background: mode === "dark" ? "#1c1c1c" : "#E5E5EF" }}
          >
            <DelivaryPassGenration />
          </TabPanel>
        </TabContext>
      ) : (
        // Show only DeliveryPassGenration for other roles
        <Box
          sx={{
            width: "100%",
            backgroundColor: mode === "dark" ? "#1c1c1c" : "#E5E5EF",
          }}
        >
          <DelivaryPassGenration />
        </Box>
      )}
    </>
  );
};

export default PassGenration;
