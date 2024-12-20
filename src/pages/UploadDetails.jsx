import { Box, Stack, Typography, TextField, Button, Snackbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiDataContext } from '../store/context';

const UploadDetails = () => {
  const [passNumber, setPassNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' }); // Snackbar state

  const deliveryPasskeys = [
    "deliveryNo",
    "royaltyPassNo",
    "SSPNumber",
    "surveyNo",
    "buyerId",
    "buyerName",
    "buyerAddress",
    "mineralName",
    "mineralGrade",
    "initialQuantatity",
    "village",
    "taluke",
    "pincode",
    "transportationMode",
    "transportationDistance",
    "journeyStartDate",
    "journeyEndDate",
    "driverName",
    "driverLiceneceNo",
    "vehicleType",
    "vehicleNumber",
    "transactionHash",
    "url",
    "imageUrl",
    "qrData"
];

  const { setApiData } = useContext(ApiDataContext);

  const handleValidate = async () => {
    try {
        if (passNumber) {
            setIsLoading(true);

            // API call with passNumber
            const response = await fetch(import.meta.env.VITE_VERIFY_DETAILS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: passNumber,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Check if it's a Royalty Pass or Delivery Pass
        const isDeliveryPass = data.details.deliveryNo ? true : false;

        if(isDeliveryPass){
          // Set data for Delivery Pass
          setApiData({
            Details: {
                "Delivery No": data.details.deliveryNo,
                "Royalty Pass No": data.details.royaltyPassNo,
                "Leaser ID": data.details.leaserId,
                "Issued Date": data.details.issuedDate,
                "Valid Upto": data.details.leaseValidUpto,
                "SSP Number": data.details.SSPNumber,
                "Village": data.details.village,
                "Taluke": data.details.taluke,
                "District": data.details.district,
                "Mineral Name": data.details.mineralName,
                "Mineral Grade": data.details.mineralGrade,
                "Initial Quantity": data.details.initialQuantatity,
                "Journey Start Date": data.details.journeyStartDate,
                "Journey End Date": data.details.journeyEndDate,
                "Distance": data.details.distance,
                "Duration": data.details.duration,
                "Driver Name": data.details.driverName,
                "Driver License No": data.details.driverLiceneceNo,
                "Driver Mobile No": data.details.driverMobileNumber,
                "Vehicle Type": data.details.vehicleType,
                "Vehicle Number": data.details.vehicleNumber,
                "Weighbridge Name": data.details.weightBridgeName,
                "Destination": data.details.destination,
                "Address": data.details.address,
                "Transaction Hash": data.details.transactionHash,
                "URL": data.details.url,
                "QRData": data.details.qrData,
                "Transportation Mode":data.details.transportationMode,
                "Transportation Distance":data.details.transportationDistance,
                "Buyer Id": data.details.buyerId,
                "Buyer Name": data.details.buyerName,
                "Buyer Address": data.details.buyerAddress,
                "Survey No": data.details.surveyNo,
                "Comment":data.details.comment
                
                
            },
            message: data.message,
            type:"delivery"
        });

        }else{
           // Map API response to context
 setApiData({
  Details: {
      "Royalty Pass No": data.details.royaltyPassNo,
      "Leaser ID": data.details.leaserId,
      "Issued Date": data.details.issuedDate,
      "Valid Upto": data.details.leaseValidUpto,
      "SSP Number": data.details.SSPNumber,
      "Village": data.details.village,
      "Taluke": data.details.taluke,
      "District": data.details.district,
      "Mineral Name": data.details.mineralName,
      "Mineral Grade": data.details.mineralGrade,
      "Initial Quantity": data.details.initialQuantatity,
      "Journey Start Date": data.details.journeyStartDate,
      "Journey End Date": data.details.journeyEndDate,
      "Distance": data.details.distance,
      "Duration": data.details.duration,
      "Driver Name": data.details.driverName,
      "Driver License No": data.details.driverLiceneceNo,
      "Driver Mobile No": data.details.driverMobileNumber,
      "Vehicle Type": data.details.vehicleType,
      "Vehicle Number": data.details.vehicleNumber,
      "Weighbridge Name": data.details.weightBridgeName,
      "Destination": data.details.destination,
      "Address": data.details.address,
      "Transaction Hash": data.details.transactionHash,
      "URL": data.details.url,
      "QRData": data.details.qrData,
      "Comment":data.details.comment
  },
  message: data.message,
   type:"royalty"
});
          
        }
                

 // Navigate to verify-details route
 navigate('/verify-details');
            } else {
                const errorData = await response.json();
                setAlert({ open: true, message: errorData.message, severity: 'error' });
                setPassNumber("")
                
               
            }
        } else {
          setAlert({ open: true, message: 'Pass number is required!', severity: 'warning' });
            console.log('');
        }
    } catch (error) {
      setAlert({ open: true, message: 'Unable to verify the certification. Please review and try again.', severity: 'error' });
        console.log();
    } finally {
        setIsLoading(false);
    }
};

const handleCloseAlert = () => {
  setAlert({ ...alert, open: false });
};



  return (
   
    <>
      <Box
        width="70%"
        height={"70%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        p={4}
        borderRadius="8px"
        bgcolor="white"
      >
        <Typography variant="h4" textAlign="center" color='#030229B2' fontWeight={700}>
          Please enter your pass number to validate.
        </Typography>
        <Box border={"1px dashed #E5E5EF"} borderRadius={"10px"} display={"flex"} width={"60%"} height={"80%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={2} gap={2}>
        <Box display={"flex"} width={"50%"} flexDirection={"column"} padding={2} gap={2}>
       
       <Typography variant="subtitle2" textAlign="center" color=' #605576' fontWeight={700}>
         Enter Pass Number
       </Typography>
       <TextField
         label="Pass Number"
         variant="outlined"
         fullWidth
         value={passNumber}
         onChange={(e) => setPassNumber(e.target.value)}
         sx={{
           '& .MuiOutlinedInput-root': {
             '& fieldset': {
               borderColor: '#140D49',
             },
             '&:hover fieldset': {
               borderColor: '#140D49',
             },
             '&.Mui-focused fieldset': {
               borderColor: '#140D49',
             },
           },
           '& .MuiInputLabel-root': {
             color: '#140D49',
           },
           '& .MuiInputLabel-root.Mui-focused': {
             color: '#140D49',
           },
         }}
       />
      
       </Box>
     

        </Box>
        <Button
         variant="contained"
         color="primary"
         fullWidth
         onClick={handleValidate}
         sx={{
           bgcolor: '#140D49',
           width:"30%",
           height:"50px",
           '&:hover': {
             bgcolor: '#0F0938',
           },
         }}
       >
         Validate
       </Button>
        
       
      </Box>
        <Snackbar
        open={alert.open}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        message={alert.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        ContentProps={{
          style: { backgroundColor: alert.severity === 'success' ? 'green' : alert.severity === 'error' ? 'red' : 'orange' }
        }}
      />
    </>
   
  );
};

export default UploadDetails;
