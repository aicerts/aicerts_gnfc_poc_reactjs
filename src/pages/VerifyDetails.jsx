import React, { useContext } from "react";
import { ApiDataContext } from "../store/context";
import { Box, Grid } from "@mui/material";
import StyledGridItem from "../ui-override/StyledGrid";
import { Subtitle, SubtitleValue } from "../ui-override/Subtitle";
import VerifyRoyaltyDetails from "../components/VerifyRoyaltyDetails";
import VerifyDeliveryDetails from "../components/VerifyDeliveryDetails";

const VerifyDetails = () => {
  const { apiData } = useContext(ApiDataContext);





  return (
    <>
    {apiData.type === "royalty"?<VerifyRoyaltyDetails/>:<VerifyDeliveryDetails/>}
    </>
  );
};

export default VerifyDetails;
