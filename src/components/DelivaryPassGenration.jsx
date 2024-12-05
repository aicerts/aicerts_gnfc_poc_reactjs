import React, { useState } from "react";
import { useThemeContext } from "../components/ThemeContext";
import {
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SideBar from "../components/Sidebar";
import axios from "axios";
import { Subtitle, SubtitleValue } from "../ui-override/SubTitle";
import StyledGridItem from "../ui-override/StyledGrid";

const DelivaryPassGenration = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [passId, setPassId] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  }); // Snackbar state
  const [data, setData] = useState({
    deliveryNo: "",
    royaltyPassNo: "",
    SSPNumber: "",
    village: "",
    taluke: "",
    mineralName: "",
    mineralGrade: "",
    initialQuantatity: 0,
    journeyStartDate: "",
    journeyEndDate: "",
    driverName: "",
    driverLiceneceNo: "",
    vehicleType: "",
    vehicleNumber: "",
    destinaton: "",
    address: "",
    surveyNo: "",
    buyerId: "",
    buyerName: "",
    pincode: "",
    buyerAddress: "",
    transportationMode: "",
    transportationDistance: "",
    tinNo: "",
  });

  const fetchPassDetails = async () => {
    if (!passId) {
      setAlert({
        open: true,
        message: "Please enter a Delivery Pass ID!",
        severity: "warning",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_GET_DELIVERY_CHALLAN,
        {
          deliveryNo: passId, // Include the pass ID in the request body
        }
      );
      if (response.data.code == 400) {
        setAlert({
          open: true,
          message: response.data.message,
          severity: "error",
        });
        setLoading(false);
        return;
      }
      setData(response.data.details);
      setAlert({
        open: true,
        message: "Data fetched successfully!",
        severity: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: "Failed to fetch details. Please check the ID and try again.",
        severity: "error",
      });
    }
    setLoading(false);
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const issueRoyaltyPass = async () => {
    setLoading(true);
    const email = localStorage.getItem("email");
    const payload = {
      email: email, // Adjust this email dynamically if needed
      deliveryNo: data.deliveryNo,
      royaltyPassNo: data.royaltyPassNo, // Use the fetched royalty pass number
      SSPNumber: data.SSPNumber,
      village: data.village,
      taluke: data.taluke,
      mineralName: data.mineralName,
      mineralGrade: data.mineralGrade,
      initialQuantatity: data.initialQuantatity,
      journeyStartDate: data.journeyStartDate,
      journeyEndDate: data.journeyEndDate,
      driverName: data.driverName,
      driverLiceneceNo: data.driverLiceneceNo,
      vehicleType: data.vehicleType,
      vehicleNumber: data.vehicleNumber,
      destinaton: data.destinaton,
      address: data.address,
      surveyNo: data.surveyNo,
      buyerId: data.buyerId,
      buyerName: data.buyerName,
      pincode: data.pincode,
      buyerAddress: data.buyerAddress,
      transportationMode: data.transportationMode,
      transportationDistance: data.transportationDistance,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_ISSUE_DELIVERY_CHALLAN,
        payload
      );
      if (response.data.code === 200) {
        setAlert({
          open: true,
          message: "delivery Pass issued successfully!",
          severity: "success",
        });
        setData({
          deliveryNo: "",
          royaltyPassNo: "",
          SSPNumber: "",
          village: "",
          taluke: "",
          mineralName: "",
          mineralGrade: "",
          initialQuantatity: 0,
          journeyStartDate: "",
          journeyEndDate: "",
          driverName: "",
          driverLiceneceNo: "",
          vehicleType: "",
          vehicleNumber: "",
          destinaton: "",
          address: "",
          surveyNo: "",
          buyerId: "",
          buyerName: "",
          pincode: "",
          buyerAddress: "",
          transportationMode: "",
          transportationDistance: "",
          tinNo: "",
        });
      } else {
        console.log("here");

        setAlert({
          open: true,
          message: response.data.message,
          severity: "error",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle specific 400 error response
        setAlert({
          open: true,
          message:
            error.response.data.message ||
            "Bad request. Please check the input data.",
          severity: "error",
        });
      } else {
        // Handle generic errors
        setAlert({
          open: true,
          message: "Failed to issue Delivery Pass. Please try again.",
          severity: "error",
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Box width="96%" px={3}>
        {/* Input Section */}

        {/* Details Section */}
        <Paper
          variant="outlined"
          sx={{ p: 3, bgcolor: mode === "dark" ? "#343434" : "#f9f9f9" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
            bgcolor={mode === "dark" ? "#343434" : "#F1F4F9"}
            p={2}
            flexDirection={"column"}
            gap={2}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              DELIVARY PASS
            </Typography>
            <Box display={"flex"} width={"50%"}>
              <TextField
                label="Dilevary Challan ID"
                variant="outlined"
                value={passId}
                onChange={(e) => setPassId(e.target.value)}
                fullWidth
              />
              <Button
                onClick={fetchPassDetails}
                disabled={loading}
                sx={{
                  ml: 2,
                  width: "30%",
                  bgcolor: "#140D49",
                  color: "white",
                  "&.Mui-disabled": { color: "white" },
                }}
              >
                {loading ? "Loading..." : "Get Details"}
              </Button>
            </Box>
          </Box>

          <Grid
            container
            spacing={0}
            sx={{
              border:
                mode === "dark" ? "1px solid #5a5a5a" : "1px solid #E5E5EF",
            }}
            p={2}
          >
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">SSP Number:</Subtitle>
              <SubtitleValue>{data.SSPNumber || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Village/Survey Number:</Subtitle>
              <SubtitleValue>{data.village || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Mineral Name:</Subtitle>
              <SubtitleValue>{data.mineralName || "-"}</SubtitleValue>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Mineral Grade:</Subtitle>
              <SubtitleValue>{data.mineralGrade || "-"}</SubtitleValue>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Journey Start Date:</Subtitle>
              <SubtitleValue>{data.journeyStartDate || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Driver Name:</Subtitle>
              <SubtitleValue>{data.driverName || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Destination/Address:</Subtitle>
              <SubtitleValue>{data.destinaton || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Tin No</Subtitle>
              <SubtitleValue>{data.tinNo || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Taluka:</Subtitle>
              <SubtitleValue>{data.taluke || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Initial Quantity:</Subtitle>
              <SubtitleValue>{data.initialQuantatity || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Journey End Date:</Subtitle>
              <SubtitleValue>{data.journeyEndDate || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Driver's License Number:</Subtitle>
              <SubtitleValue>{data.driverLiceneceNo || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Vehicle Type/Number:</Subtitle>
              <SubtitleValue>
                {data.vehicleType || "-"} / {data.vehicleNumber || "-"}
              </SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Buyer Name </Subtitle>
              <SubtitleValue>{data.vehicleType || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Buyer address </Subtitle>
              <SubtitleValue>{data.vehicleType || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2">Pincode </Subtitle>
              <SubtitleValue>{data.pincode || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2"> Transportation Mode </Subtitle>
              <SubtitleValue>{data.transportationMode || "-"}</SubtitleValue>
            </StyledGridItem>
            <StyledGridItem item xs={4}>
              <Subtitle variant="subtitle2"> Transportation Distance </Subtitle>
              <SubtitleValue>
                {data.transportationDistance || "-"}
              </SubtitleValue>
            </StyledGridItem>
          </Grid>
          {/* <StyledGridItem
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              border:"none",
            }}
          >
            <Button
              onClick={issueRoyaltyPass}
              disabled={loading}
              sx={{
                py: 1.5,
                my: 2,
                ml: 2,
                width: "30%",
                bgcolor: "#140D49",
                color: "white",
                "&.Mui-disabled": { color: "white" },
              }}
            >
              {loading ? "Loading..." : "Issue Delivery Pass"}
            </Button>
          </StyledGridItem> */}
        </Paper>
      </Box>
      <Snackbar
        open={alert.open}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        message={alert.message}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        ContentProps={{
          style: {
            backgroundColor:
              alert.severity === "success"
                ? "green"
                : alert.severity === "error"
                  ? "red"
                  : "orange",
          },
        }}
      />
    </>
  );
};

export default DelivaryPassGenration;
