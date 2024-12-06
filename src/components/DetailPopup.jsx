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
  Button,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "./ThemeContext";
import { Subtitle, SubtitleValue } from "../ui-override/SubTitle";
import StyledGridItem from "../ui-override/StyledGrid";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import RoyaltyPassHtml from "../utils/RoyaltyPasshtml";
import DeliveryPassHtml from "../utils/DeliveryPassHtml";
import  html2pdf  from "html2pdf.js";
import axios from "axios";


const DetailPopup = ({ open, onClose, type,data }) => {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toggleTheme, mode } = useThemeContext();
  const [comment , setComment]= useState("")
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  }); // Snackbar state
  const[isAdmin, setIsAdmin]=useState(false)

  const downloadPDF = () => {
    let element;
    if (type === "royalty") {
      element = document.getElementById("royalty-pass-print");
    } else {
      element = document.getElementById("delivery-pass-print");
    }
  
    // Save the original color
    const originalColor = element.style.color;
  
    // Set the color to black for PDF generation
    element.style.color = "black";
  
    const options = {
      margin: 10,
      filename: type === "royalty" ? `Royalty Pass-${data.royaltyPassNo}.pdf` : `Delivery Challan-${data.deliveryNo}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .finally(() => {
        // Restore the original color after the PDF is generated
        element.style.color = originalColor;
      });
  };
  useEffect(()=>{
    const role = localStorage.getItem("role")
    if(role==="Admin"){
      setIsAdmin(true)
    }
  },[])

  const submitComent = async () => {
    const id = type === "royalty" ? data.royaltyPassNo : data.deliveryNo;
    if (!id) {
      console.log("something went wrong please try again");
      return; // Ensure we exit the function if there's no ID.
    }
    try {
      const response = await axios.post(import.meta.env.VITE_ADD_COMMENT, {
        id,
        comment: comment,
      });
  
      if (response.data.code == 400) {
        setAlert({
          open: true,
          message: response.data.message,
          severity: "error",
        });
        setLoading(false);
        return;
      }
      setAlert({
        open: true,
        message: "comment submitted successfully",
        severity: "success",
      });
      
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside the range of 2xx
        console.error("Error response:", error.response);
        setAlert({
          open: true,
          message: error.response.data.message || "An error occurred.",
          severity: "error",
        });
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Error request:", error.request);
        setAlert({
          open: true,
          message: "No response received from the server.",
          severity: "error",
        });
      } else {
        // Something else happened
        console.error("Error message:", error.message);
        setAlert({
          open: true,
          message: "An unexpected error occurred.",
          severity: "error",
        });
      }
    }finally{
      setComment("")
    }
  };
  
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  

 

  return (
    <>
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
       {
        type === "royalty" ? <RoyaltyPassHtml royaltyPass={data} barcodeSrc={"/barcode.png"}/>:<DeliveryPassHtml deliveryChallan={data} barcodeSrc={"/barcode.png"}/>
       }
       <Box width={"100%"} display={"flex"} pt={2} justifyContent={"space-between"}>
       {
        isAdmin ?(<Box display={"flex"} width={"50%"}>
          <TextField
             label="Add Comment"
             variant="outlined"
             value={comment}
             onChange={(e) => setComment(e.target.value)}
             fullWidth
            
             
           />
           <Button
            
             onClick={submitComent}
             disabled={loading}
             sx={{ ml: 2, width:"30%", bgcolor:"#140D49" , color:"white", '&.Mui-disabled': { color: 'white' }, }}
           >
             {loading ? 'Loading...' : 'Comment'}
           </Button>
          </Box>):(
            <Box display={"flex"} width={"50%"}></Box>
            )
       }
        <Button  variant="outline" onClick={downloadPDF} sx={{backgroundColor:"#140D49", color:"white"}}>Print</Button>
       </Box>
      </DialogContent>
    </Dialog>
    
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

export default DetailPopup;
