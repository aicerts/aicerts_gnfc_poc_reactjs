import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "./ThemeContext";
import { Subtitle, SubtitleValue } from "../ui-override/SubTitle";
import StyledGridItem from "../ui-override/StyledGrid";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const DetailPopup = ({ open, onClose, recordId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { toggleTheme, mode } = useThemeContext();

  useEffect(() => {
    if (!open || !recordId) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${import.meta.env.VITE_WHOLE_RECORD}/${recordId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch record details");
        }

        const result = await response.json();
        console.log(result.data);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [open, recordId]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          data && (
            <div>
              <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
                bgcolor={mode === "dark" ? "#1c1c1c" : "white"}
                flexDirection={"row"}
                gap={2}
                border={"1px solid #E5E5EF"}
              >
                <Grid container spacing={0} p={2}>
                  <Grid xs={14}  pb={1}  fontSize={"18px"} fontWeight={700}>Leaser Details</Grid>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Leaser Id</Subtitle>
                    <SubtitleValue>{data.leaser.roleId}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Leaser Name</Subtitle>
                    <SubtitleValue>{data.leaser.name}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Approve Date</Subtitle>
                    <SubtitleValue>{data.leaser.approvedDate}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Leaser Status</Subtitle>
                    <SubtitleValue>{data.leaser.status}</SubtitleValue>
                  </StyledGridItem>
                </Grid>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
                bgcolor={mode === "dark" ? "#1c1c1c" : "#F1F4F9"}
                p={2}
                flexDirection={"row"}
                gap={2}
              >
                <Box
                  width={"10%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={data.royaltyPass.qrData}
                    alt=""
                    style={{ width: "130px", height: "130px" }}
                  />
                </Box>
                <Grid container spacing={0} p={2}>
                <Grid xs={14}  pb={1} fontSize={"18px"} fontWeight={700}>Royalty Pass Details</Grid>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Royalty Pass</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.royaltyPassNo}
                    </SubtitleValue>
                  </StyledGridItem>
                  {/* <StyledGridItem item xs={4} px={1}>
        <Subtitle variant="subtitle2">QR</Subtitle>
        <SubtitleValue>
          <QRCodeSVG value={data.royaltyPass.qrData} size={128} />
        </SubtitleValue>
      </StyledGridItem> */}
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Issued On</Subtitle>
                    <SubtitleValue>{data.royaltyPass.issuedDate}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">SSP Number</Subtitle>
                    <SubtitleValue>{data.royaltyPass.SSPNumber}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Lease Valid Upto</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.leaseValidUpto}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Weight Bridge Name</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.weightBridgeName}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Village / Taluke</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.village} / {data.royaltyPass.taluke}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">
                      Mineral Name (Grade)
                    </Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.mineralName} (
                      {data.royaltyPass.mineralGrade}){" "}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Driver Name</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.driverName}{" "}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Driver Licence No</Subtitle>
                    <SubtitleValue>
                      {data.royaltyPass.driverLiceneceNo}{" "}
                    </SubtitleValue>
                  </StyledGridItem>
                </Grid>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
                bgcolor={mode === "dark" ? "#1c1c1c" : "white"}
                flexDirection={"row"}
                gap={2}
                border={"1px solid #E5E5EF"}
              >
                <Grid container spacing={0} p={2}>
                <Grid xs={14}  pb={1}  fontSize={"18px"} fontWeight={700}>Delivery Challan Details</Grid>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Delivery Challan No</Subtitle>
                    <SubtitleValue>{recordId}</SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Tin No</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.tinNo || "NA"}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Survey No</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.surveyNo || "NA"}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Village / Pincode</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.village || "NA"} /{" "}
                      {data.deliveryChallan.pincode}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">SSP No</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.SSPNumber || "NA"}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Purchaser</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.buyerName || "NA"} /{" "}
                      {data.deliveryChallan.buyerAddress || "NA"}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Vehicle Type / No</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.vehicleType || "NA"} /{" "}
                      {data.deliveryChallan.vehicleNumber || "NA"}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">
                      Mineral Name (Grade)
                    </Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.mineralName || "NA"} (
                      {data.deliveryChallan.mineralGrade || "NA"}){" "}
                    </SubtitleValue>
                  </StyledGridItem>
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Village / Taluke</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.village || "NA"} / 
                      {data.deliveryChallan.taluke || "NA"}{" "}
                    </SubtitleValue>
                  </StyledGridItem>
                
                  <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2"> Initial Quantatity</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan. initialQuantatity || "NA"}
                    </SubtitleValue>
                    </StyledGridItem>
                    <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2"> Journey Start Date</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan. journeyStartDate || "NA"}
                    </SubtitleValue>
                    </StyledGridItem>
                    <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2"> Journey End Date</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan. journeyEndDate || "NA"}
                    </SubtitleValue>
                    </StyledGridItem>
                    <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2">Driver Name</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.driverName
 || "NA"}
                    </SubtitleValue>
                    </StyledGridItem>
                    <StyledGridItem item xs={4} px={1}>
                    <Subtitle variant="subtitle2"> Journey Licence No</Subtitle>
                    <SubtitleValue>
                      {data.deliveryChallan.driverLiceneceNo
 || "NA"}
                    </SubtitleValue>
                    </StyledGridItem>

                </Grid>
              </Box>
            
            </div>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailPopup;
