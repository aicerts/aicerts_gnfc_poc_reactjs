import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import LeasersTable from "./LeasersTable";
import { useTheme } from "@emotion/react";
import { useThemeContext } from "./ThemeContext";

import DeliveryPasstable from "./tables/DeliveryPasstable";
import RoyaltyPassTable from "./tables/RoyaltyPassTable";

const LeaserDashboard = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeContext();

  const [statsData, setStatsData] = useState({
    annualRoyalty: 0,
    dailyChallan: 0,
    weeklyChallan: 0,
    monthlyChallan: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const urls = [
            import.meta.env.VITE_GET_DAILY_ROYALTY_PASS, 
            import.meta.env.VITE_GET_WEEKLY_ROYALTY_PASS,
            import.meta.env.VITE_GET_MONTHLY_ROYALTY_PASS,
          import.meta.env.VITE_GET_ANNUAL_ROYALTY_PASS,

          import.meta.env.VITE_GET_DAILY_DELIVERY_CHALLAN,
          import.meta.env.VITE_GET_WEEKLY_DELIVERY_CHALLAN,
          import.meta.env.VITE_GET_MONTHLY_DELIVERY_CHALLAN,
          import.meta.env.VITE_GET_ANNUAL_DELIVERY_CHALLAN,
        ];

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));

        setStatsData({
            dailyRoyalty:data[0]?.data?.count ||0,
            weeklyRoyalty:data[1]?.data?.count ||0,
            monthlyRoyalty:data[2]?.data?.count ||0,
          annualRoyalty: data[3]?.data?.count || 0,
          dailyChallan: data[4]?.data?.count || 0,
          weeklyChallan: data[5]?.data?.count || 0,
          monthlyChallan: data[6]?.data?.count || 0,
          annualChallan:data[7]?.data?.count ||0,
        });
      } catch (error) {
        console.error("Error fetching stats data:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Box
      display="flex"
      width="100%"
      height={"100%"}
      bgcolor={mode === "dark" ? "#1e1e1e" : "#E5E5EF"}
      pl={5}
    
    >
      <Grid
        spacing={1}
        
        flexDirection="column"
        gap={3}
        pl={5}
        pt={3}
      
        overflow={"scroll"}
      >
        <Grid size={12} width="97%"  height={"35%"}>
          <Grid
            container
            spacing={1}
            item
            xs={12}
            display="flex"
            height="100px"
            justifyContent="center"
            gap={1}
          >
            <StatsCard
              title="Daily Royalty Count"
              value={statsData.dailyRoyalty}
              growthText="Today's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
            <StatsCard
              title="Weekly Royalty Count"
              value={statsData.weeklyRoyalty}
              growthText="This Week's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
            <StatsCard
              title="Monthly Royalty Count"
              value={statsData.monthlyRoyalty}
              growthText="This Month's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
              <StatsCard
              title="Annual Royalty Count"
              value={statsData.annualRoyalty}
              growthText="Yearly Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
             <StatsCard
              title="Daily Delivery Challan"
              value={statsData.dailyChallan}
              growthText="This Month's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
             <StatsCard
              title="Weekly Delivery Challan"
              value={statsData.weeklyChallan}
              growthText="This Month's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
             <StatsCard
              title="Monthly Delivery Challan"
              value={statsData.monthlyChallan}
              growthText="This Month's Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
              <StatsCard
              title="Annual Delivery Challan"
              value={statsData.annualChallan}
              growthText="Yearly Report"
              isPositive={true}
              iconSrc="/icons/layer1.png"
            />
          </Grid>
        </Grid>
        <Grid
          bgcolor={mode === "dark" ? "#343434" : "white"}
          p={2}
          borderRadius={2}
          size={12}
          display="flex"
          flexDirection="column"
          gap={2}
          width={"97%"}
          height={"45%"}
          mb={3}
    
        >
            <RoyaltyPassTable/>
        </Grid>

        <Grid
          bgcolor={mode === "dark" ? "#343434" : "white"}
          p={2}
          borderRadius={2}
          size={12}
          display="flex"
          flexDirection="column"
          gap={2}
          width={"97%"}
    
        >
          <DeliveryPasstable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaserDashboard;
