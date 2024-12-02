import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LeaserRoyaltyTable = ({ royaltyPasses ,onSelectedRoyltyPass}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Royalty Passes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#F1F4F9" }}>
            <TableRow>
              <TableCell>Royalty Pass ID</TableCell>
              <TableCell>Valid Until</TableCell>
              <TableCell>Weight (Tons)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {royaltyPasses.map((pass) => (
              <TableRow key={pass.royaltyPassId} sx={{ color: "#605576" }}>
                <TableCell>{pass.royaltyPassId}</TableCell>
                <TableCell>{pass.validUntil}</TableCell>
                <TableCell>{pass.weight}</TableCell>
                <TableCell>{pass.status}</TableCell>
                <TableCell>
                          <IconButton
                          sx={{
                            border: "1px solid #140D49",
                            borderRadius: "10px",
                            padding: "4px", // Optional for further adjustment
                          }}
                            onClick={() => onSelectedRoyltyPass(pass.royaltyPassId)}
              
                          >
                            <RemoveRedEyeIcon sx={{ color: "#140D49", }} />
                          </IconButton>
                        </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaserRoyaltyTable;
