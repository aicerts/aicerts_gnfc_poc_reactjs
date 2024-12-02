import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Drawer,
  Paper,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useTheme } from "@emotion/react";
import { useThemeContext } from "./ThemeContext";
import DetailPopup from "./DetailPopup";

const LeasersTable = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [leasers, setLeasers]=useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState("")
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(null)

  

  useEffect(() => {
    // Function to fetch the leasers data
    const fetchLeasers = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        setError("No token found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(import.meta.env.VITE_LEASER, {
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
        setLeasers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeasers();
  }, []);


 
  

  const [selectedLeaser, setSelectedLeaser] = useState(null);
  const [selectedRoyaltyPass, setSelectedRoyaltyPass] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [royltyPasses, setRoyltyPasses]=useState([])
  const [deliveryChallans, setDelivaryChallans]= useState([])
  const fetchRoyltyPasses = async(leasersId)=>{
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      setError("No token found in localStorage");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_ROYALTY_PASS}/${leasersId}`, {
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
     return data.data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
 
  const fetchDelivaryChallanList = async(royaltyId)=>{
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      setError("No token found in localStorage");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_DELIVERY_CHALLAN}/${royaltyId}`, {
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
     return data.data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleLeaserViewClick = async(leaserId) => {
  const royltyPasses = await fetchRoyltyPasses(leaserId)
  console.log(royltyPasses)
  setRoyltyPasses(royltyPasses)
    setSelectedLeaser(leaserId);
    setSelectedRoyaltyPass(null); // Reset any previously selected royalty pass
    setIsDrawerOpen(true);
  };

  const handleRoyaltyPassViewClick = async(royaltyPassId) => {
   const delivaryChallans = await fetchDelivaryChallanList(royaltyPassId)
   setDelivaryChallans(delivaryChallans)
    setSelectedRoyaltyPass(royaltyPassId);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLeaser(null);
    setSelectedRoyaltyPass(null);
  };

  const viewDelivaryDetail = (recordId) => {
    setSelectedRecordId(recordId);
    setPopupOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ 
      maxHeight: 430,  // You can set a specific max height
      overflowY: 'auto',  // Scroll vertically if the content exceeds the height
      overflowX: 'auto',  // Scroll horizontally if the content exceeds the width
    }} >
        <Table>
          <TableHead sx={{ backgroundColor:mode==="dark"?"#343434": "#F1F4F9" }}>
            <TableRow>
              <TableCell>Sr No</TableCell>
              <TableCell>Leaser ID</TableCell>
              <TableCell>Onboarding Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor:mode==="dark"?"#343434": "#F1F4F9" }}>
            {leasers.map((leaser,index) => (
              <TableRow key={leaser.roleId}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{leaser.roleId}</TableCell>
                <TableCell>{new Date(leaser.approvedDate).toLocaleDateString()}</TableCell>

                <TableCell>{leaser.isActive ? "active":"Inactive"}</TableCell>
                <TableCell>
                  <IconButton
                   sx={{
                    border:mode==="dark"?"1px solid white": "1px solid #140D49",
                    borderRadius: "10px",
                    padding: "4px", // Optional for further adjustment
                  }}
                    onClick={() => handleLeaserViewClick(leaser.roleId)}
                    variant="outlined"
                  >
                    <RemoveRedEyeIcon sx={{ color: mode==="dark"?"white": "#140D49", }}  />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Drawer for Royalty Passes and Delivery Passes */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer} >
        <div style={{ width: "640px", padding: "20px 20px" }}>
          {selectedLeaser && !selectedRoyaltyPass && (
            <>
              <Typography variant="h6">Royalty Passes for {selectedLeaser}</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Royalty Pass ID</TableCell>
                      <TableCell>Issue Date</TableCell>

                      <TableCell>Valid Until</TableCell>
                      
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {royltyPasses?.map((pass) => (
                      <TableRow key={pass.royaltyPassNo}>
                        <TableCell>{pass.royaltyPassNo}</TableCell>
                        <TableCell>{new Date(pass.issuedDate ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{new Date(pass.leaseValidUpto ).toLocaleDateString()}</TableCell>
                        
                        <TableCell>
                          <IconButton
                          sx={{
                            border:mode==="dark"?"1px solid white": "1px solid #140D49",
                            borderRadius: "10px",
                            padding: "4px", // Optional for further adjustment
                          }}
                            onClick={() => handleRoyaltyPassViewClick(pass.royaltyPassNo)}
              
                          >
                            <RemoveRedEyeIcon sx={{ color: mode==="dark"?"white": "#140D49", }}/>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
          {selectedRoyaltyPass && (
            <>
              <Typography variant="h6">
                Delivery Passes for {selectedRoyaltyPass}
              </Typography>
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
                    {deliveryChallans.map((delivery) => (
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
                            onClick={() => viewDelivaryDetail(delivery.deliveryNo)}
              
                          >
                            <RemoveRedEyeIcon sx={{ color: mode==="dark"?"white": "#140D49", }}  />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box py={3}>
              <Button onClick={() => setSelectedRoyaltyPass(null)} variant="contained" color="primary" sx={{backgroundColor:"#140D49", color:"white"}}>
                Back to Royalty Passes
              </Button>
              </Box>
            </>
          )}
        </div>
      </Drawer>

       {/* Existing table code */}
       <DetailPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        recordId={selectedRecordId}
      />
    </div>
  );
};

export default LeasersTable;
