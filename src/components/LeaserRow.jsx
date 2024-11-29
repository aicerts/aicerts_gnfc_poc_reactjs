import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LeaserRow = ({ index, leaser, onViewClick }) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{leaser.roleId}</TableCell>
      <TableCell>{new Date(leaser.approvedDate).toLocaleDateString()}</TableCell>
      <TableCell>{leaser.isActive ? "Active" : "Inactive"}</TableCell>
      <TableCell>
        <IconButton onClick={() => onViewClick(leaser.roleId)}>
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default LeaserRow;
