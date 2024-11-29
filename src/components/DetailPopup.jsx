import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, CircularProgress, IconButton, Box, Grid } from "@mui/material";
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
        const response = await fetch(`${import.meta.env.VITE_WHOLE_RECORD}/${recordId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch record details");
        }

        const result = await response.json();
        console.log(result.data)
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
        Record Details
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
                 <Box display="flex" justifyContent="space-between" mb={3} bgcolor={mode==="dark"?"#1c1c1c":"#F1F4F9"} p={2} flexDirection={"row"} gap={2}>
<Box  width={"10%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <img src="/Velidation 1.png" alt="" style={{width:"130px", height:"130px"}} />
</Box>
<Grid container spacing={0} p={2}>
  <StyledGridItem item xs={4} px={1}>
    <Subtitle variant="subtitle2">Royalty Pass</Subtitle>
    <SubtitleValue>{data.royaltyPass.royaltyPassNo}</SubtitleValue>
  </StyledGridItem>
  {/* <StyledGridItem item xs={4} px={1}>
        <Subtitle variant="subtitle2">QR</Subtitle>
        <SubtitleValue>
          <QRCodeSVG value={data.royaltyPass.qrData} size={128} />
        </SubtitleValue>
      </StyledGridItem> */}
       <StyledGridItem item xs={4} px={1}>
    <Subtitle variant="subtitle2">Issued On</Subtitle>
    <SubtitleValue>{data.royaltyPass.issuedDate
    }</SubtitleValue>
  </StyledGridItem>
  <StyledGridItem item xs={4} px={1}>
    <Subtitle variant="subtitle2">SSP Number</Subtitle>
    <SubtitleValue>{data.royaltyPass.SSPNumber
    }</SubtitleValue>
  </StyledGridItem>
  <StyledGridItem item xs={4} px={1}>
    <Subtitle variant="subtitle2">Lease Valid Upto</Subtitle>
    <SubtitleValue>{data.royaltyPass.leaseValidUpto
    }</SubtitleValue>
  </StyledGridItem>
  <StyledGridItem item xs={4} px={1}>
    <Subtitle variant="subtitle2">Weight Bridge Name</Subtitle>
    <SubtitleValue>{data.royaltyPass.weightBridgeName
    }</SubtitleValue>
  </StyledGridItem>
  </Grid>
                 </Box>
              <Typography variant="h6">Record ID: {recordId}</Typography>
              <Typography variant="body1">
                {/* Render the data here */}
                {JSON.stringify(data, null, 2)}
              </Typography>
            </div>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailPopup;
