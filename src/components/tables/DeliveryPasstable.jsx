import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../ThemeContext'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DetailPopup from '../DetailPopup';

const DeliveryPasstable = () => {
    const [deliveryChallans, setDelivaryChallans]=useState([])
    const [error, setError]=useState("")
    const [loading, setLoading]=useState(false)
    const { toggleTheme, mode } = useThemeContext();
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedPass, setSelectedPass] = useState(null); // State for selected pass
  const [selectedRecordId, setSelectedRecordId] = useState(null)


  const viewDetail = (recordId) => {
    const pass = deliveryChallans.find((p) => p.deliveryNo === recordId); // Filter pass
    setSelectedPass(pass); // Set the selected pass
    console.log(recordId)
    setSelectedRecordId(recordId);
    setPopupOpen(true);
  };
    


    const fetchDelivaryChallanList = async()=>{
        const token = localStorage.getItem("token"); // Get the token from localStorage
        const roleId = localStorage.getItem("roleId")
    
        if (!token) {
          setError("No token found in localStorage");
          setLoading(false);
          return;
        }
    
        try {
          const response = await fetch(`${import.meta.env.VITE_DELIVERY_CHALLAN}/${roleId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token in the Authorization header
            },
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch leasers");
          }
    
          const data = await response.json();
          setDelivaryChallans(data.data)
        
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      useEffect(()=>{fetchDelivaryChallanList()},[])
  return (
   <>
   <Typography
            variant="title"
            color={mode === "dark" ? "white" : "#030229"}
            fontWeight={700}
            fontSize="20px"
          >
            Delivary Details
          </Typography>
          <>
              
          <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Delivery Pass ID</TableCell>
                      <TableCell>SSP Number</TableCell>
                      <TableCell>Buyer Id</TableCell>
                      {/* <TableCell>Status</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    deliveryChallans.length >0 ?(
                      deliveryChallans.map((delivery) => (
                        <TableRow key={delivery.deliveryNo}>
                          <TableCell>{delivery.deliveryNo}</TableCell>
                          <TableCell>{delivery.SSPNumber}</TableCell>
                          <TableCell>{delivery.buyerId}</TableCell>
                          {/* <TableCell>{delivery.status}</TableCell> */}
                          <TableCell>
                            <IconButton
                            sx={{
                               border:mode==="dark"?"1px solid white": "1px solid #140D49",
                              borderRadius: "10px",
                              padding: "4px", // Optional for further adjustment
                            }}
                              onClick={() => viewDetail(delivery.deliveryNo)}
                
                            >
                              <RemoveRedEyeIcon sx={{ color: mode==="dark"?"white": "#140D49", }}  />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ):(
                      <TableRow>
                      <TableCell colSpan={4} align="center">
                        No data available
                      </TableCell>
                    </TableRow>
                    )
                  }
                  </TableBody>
                </Table>
              </TableContainer>
            </>
             {/* Existing table code */}
       <DetailPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        type={"delivary"}
        data={selectedPass} // Pass selected data
       
        
      />
   </>
  )
}

export default DeliveryPasstable