import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const RoyaltyPassRow = ({ pass, onViewClick }) => {
  return (
    <TableRow>
      <TableCell>{pass.royaltyPassNo}</TableCell>
      <TableCell>{new Date(pass.issuedDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(pass.leaseValidUpto).toLocaleDateString()}</TableCell>
      <TableCell>
        <IconButton onClick={() => onViewClick(pass.royaltyPassNo)}>
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default RoyaltyPassRow;
