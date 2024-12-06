import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../ThemeContext'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DetailPopup from '../DetailPopup';


const RoyaltyPassTable = () => {
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState("")
    const [royltyPasses, setRoyltyPasses]=useState([])
    const { toggleTheme, mode } = useThemeContext();
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedPass, setSelectedPass] = useState(null); // State for selected pass
  const [selectedRecordId, setSelectedRecordId] = useState(null)
    


    const fetchRoyltyPasses = async()=>{
        const token = localStorage.getItem("token"); // Get the token from localStorage
        const roleId = localStorage.getItem("roleId")
    
        if (!token) {
          setError("No token found in localStorage");
          setLoading(false);
          return;
        }
    
        try {
          const response = await fetch(`${import.meta.env.VITE_ROYALTY_PASS}/${roleId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token in the Authorization header
            },
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch leasers");
          }
    
          const data = await response.json()
         setRoyltyPasses(data.data)
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      useEffect(()=>{fetchRoyltyPasses()},[])
      const viewDetail = (recordId) => {
        const pass = royltyPasses.find((p) => p.royaltyPassNo === recordId); // Filter pass
        setSelectedPass(pass); // Set the selected pass
        console.log(recordId)
        setSelectedRecordId(recordId);
        setPopupOpen(true);
      };


  return (
    <>
     <Typography
            variant="title"
            color={mode === "dark" ? "white" : "#030229"}
            fontWeight={700}
            fontSize="20px"
          >
            Royalty Details
          </Typography>
          <>
              
              <TableContainer>
              <Table>
  <TableHead>
    <TableRow>
      <TableCell>Royalty Pass ID</TableCell>
      <TableCell>Issue Date</TableCell>
      <TableCell>Valid Until</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {royltyPasses?.length > 0 ? (
      royltyPasses.map((pass) => (
        <TableRow key={pass.royaltyPassNo}>
          <TableCell>{pass.royaltyPassNo}</TableCell>
          <TableCell>{new Date(pass.issuedDate).toLocaleDateString()}</TableCell>
          <TableCell>{new Date(pass.leaseValidUpto).toLocaleDateString()}</TableCell>
          <TableCell>
            <IconButton
              sx={{
                border: mode === "dark" ? "1px solid white" : "1px solid #140D49",
                borderRadius: "10px",
                padding: "4px", // Optional for further adjustment
              }}
              onClick={() => viewDetail(pass.royaltyPassNo)}
            >
              <RemoveRedEyeIcon sx={{ color: mode === "dark" ? "white" : "#140D49" }} />
            </IconButton>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={4} align="center">
          No data available
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>

              </TableContainer>
            </>
             {/* Existing table code */}
       <DetailPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        type={"royalty"}
        data={selectedPass} // Pass selected data
       
        
      />
    </>
  )
}

export default RoyaltyPassTable