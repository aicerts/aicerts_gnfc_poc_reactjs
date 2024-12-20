import React, { useContext } from "react";
import { ApiDataContext } from "../store/context";
import { Box, Button, Grid } from "@mui/material";
import StyledGridItem from "../ui-override/StyledGrid";
import { Subtitle, SubtitleValue } from "../ui-override/Subtitle";
import { useNavigate } from "react-router-dom";

const VerifyDeliveryDetails = () => {
  const { apiData } = useContext(ApiDataContext);
  console.log(apiData);
  const navigate = useNavigate();

  // Check if apiData and Details are available
  if (apiData.type === null) {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <p>No data available</p>
        <Button
          sx={{
            bgcolor: "#140D49",
            py: 1,
            px: 2,
            fontSize: "15px",
            fontWeight: 600,
            color: "white",
          }}
          onClick={() => navigate("/")}
        >
          Back to main page
        </Button>
      </Box>
    );
  }

  const { Details } = apiData;
  const qrFields = [
    { label: "Delivery No", value: Details["Delivery No"] },
    { label: "Royalty Pass No", value: Details["Royalty Pass No"] },
    { label: "Issued Date", value: Details["Issued Date"] },
    { label: "Valid Upto", value: Details["Valid Upto"] },
    { label: "Buyer Id", value: Details["Buyer Id"] },
    { label: "Buyer Name", value: Details["Buyer Name"] },
    { label: "Buyer Address", value: Details["Buyer Address"] },
  ].filter((field) => field.value !== null && field.value !== undefined);
  // The remaining fields to display in the grid below, excluding certain keys
  const excludedFields = ["Transaction Hash", "QRData", "URL" , "Comment"];

  const remainingFields = Object.keys(Details)
    .filter(
      (key) =>
        !qrFields.some((field) => field.label === key) &&
        !excludedFields.includes(key) &&
        Details[key] !== null &&
        Details[key] !== undefined
    )
    .map((key) => ({
      label: key,
      value: Details[key],
    }));

  const handleVerifyOnBlockchain = () => {
    const txHash = Details["Transaction Hash"];
    const issueDate = Details["Issued Date"];
    const baseUrl = issueDate
      ? new Date(issueDate) < new Date("2024-12-06T00:00:00.000Z")
        ? "https://www.oklink.com/amoy/tx/"
        : "https://sepolia.etherscan.io/tx/"
      : "https://sepolia.etherscan.io/tx/";

    const verifyUrl = `${baseUrl}${txHash}`;
    console.log("Verification URL:", verifyUrl);

    // Perform further actions like redirecting or opening the URL
    window.open(verifyUrl, "_blank");
  };

  return (
    <>
    <Box
      display={"flex"}
      width={"80%"}
      height={"65%"}
      bgcolor={"white"}
      flexDirection={"column"}
      p={2}
      position={"relative"}
     
    >
      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
        bgcolor={"#F1F4F9"}
        p={2}
        flexDirection={"row"}
        gap={2}
      >
        <Grid container spacing={0}>
          {qrFields.map((field) => (
            <StyledGridItem item xs={4} key={field.label} px={1}>
              <Subtitle variant="subtitle2">{field.label}</Subtitle>
              <SubtitleValue>{field.value}</SubtitleValue>
            </StyledGridItem>
          ))}
          <StyledGridItem
            item
            xs={4}
            key={"verify-on-blockchain"}
            px={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ border: "none" }}
          >
            <Button
              sx={{
                bgcolor: "#140D49",
                py: 1,
                px: 2,
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
              }}
              onClick={handleVerifyOnBlockchain}
            >
              VERIFY ON BLOCKCHAIN
            </Button>
          </StyledGridItem>
        </Grid>
        <Box
          width={"14%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={Details.QRData}
            alt="QR Code"
            style={{ width: "130px", height: "130px" }}
          />
        </Box>
      </Box>
      {/* Remaining Fields Grid */}
      <Box  sx={{
        overflowY: "auto", // Enable vertical scrolling
        scrollbarWidth: "none", // Hide scrollbar in Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar in WebKit browsers (Chrome, Safari, etc.)
        },
      }}>
        <Grid container spacing={0}>
          {remainingFields.map((field) => (
            <StyledGridItem item xs={4} key={field.label} px={1}>
              <Subtitle variant="subtitle2">{field.label}</Subtitle>
              <SubtitleValue>{field.value || "NA"} </SubtitleValue>
            </StyledGridItem>
          ))}
        </Grid>
      </Box>
    </Box>
    {Details["Comment"] && (
 <Box bgcolor={"white"} width={"82%"}>
 <Box px={1}  width={"50%"}>
 <Subtitle  variant="subtitle2">Comment: </Subtitle>
 <SubtitleValue sx={{color:"#226f54"}}>{Details["Comment"]} </SubtitleValue>
   {/* <span style={{ color:"#605576", fontSize: "20px", fontWeight: 600 }}></span>
   <span style={{ fontSize: "18px", fontWeight: 500 }}></span> */}
 </Box>
</Box>
)}

    </>
  );
};

export default VerifyDeliveryDetails;
