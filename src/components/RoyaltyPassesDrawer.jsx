import React from "react";
import { Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from "@mui/material";
import RoyaltyPassRow from "./RoyaltyPassRow";
import DeliveryChallanRow from "./DeliveryChallanRow";


const RoyaltyPassesDrawer = ({
  isOpen,
  onClose,
  selectedLeaser,
  selectedRoyaltyPass,
  royltyPasses,
  deliveryChallans,
  onRoyaltyPassClick,
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: "600px", padding: "20px" }}>
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
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {royltyPasses.map((pass) => (
                    <RoyaltyPassRow key={pass.royaltyPassNo} pass={pass} onViewClick={onRoyaltyPassClick} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        {selectedRoyaltyPass && (
          <>
            <Typography variant="h6">Delivery Passes for {selectedRoyaltyPass}</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Delivery Pass ID</TableCell>
                    <TableCell>SSP Number</TableCell>
                    <TableCell>Buyer Id</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {deliveryChallans.map((delivery) => (
                    <DeliveryChallanRow key={delivery.deliveryChallanNo} delivery={delivery} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={() => {}} variant="contained" color="primary">
              Back to Royalty Passes
            </Button>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default RoyaltyPassesDrawer;
