import React from "react";
import { TableRow, TableCell } from "@mui/material";

const DeliveryChallanRow = ({ delivery }) => {
  return (
    <TableRow>
      <TableCell>{delivery.deliveryChallanNo}</TableCell>
      <TableCell>{delivery.SSPNumber}</TableCell>
      <TableCell>{delivery.buyerId}</TableCell>
    </TableRow>
  );
};

export default DeliveryChallanRow;
