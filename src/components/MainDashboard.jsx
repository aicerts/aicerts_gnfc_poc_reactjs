import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StatsCard from './StatsCard'
import LeasersTable from './LeasersTable'
import { useTheme } from '@emotion/react'
import SideBar from './Sidebar'
import { useThemeContext } from './ThemeContext'

const MainDashboard = () => {
  const theme = useTheme()
  const isDarkMode = false
  const { toggleTheme, mode } = useThemeContext();
  
 
  return (

           <Box display={"flex"} width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"} bgcolor={ mode==="dark"?"black":"#E5E5EF"} pr={5}>
              <SideBar/>
             <Grid container spacing={1} display={"flex"} flexDirection={"column"} gap={3} pl={5}>
            
              <Grid size={12}  width={"100%"} >
                <Grid container spacing={1} item xs={12} display={"flex"} height={"120px"} justifyContent={"center"} gap={1} >
                  <StatsCard title={"Total Transaction (per day)"} value={"1,000+"} growthText={"8.5% Up from yesterday"} isPositive={true} iconSrc={"/icons/layer1.png"}/>
                  <StatsCard />
                  <StatsCard />
                  <StatsCard />
                </Grid>
              </Grid>
              <Grid  bgcolor={mode==="dark"?"#1e1e1e":"white"} p={2} borderRadius={2} size={12} display={"flex"} flexDirection={"column"} gap={2} wid>
                <Typography variant="title" color={mode==="dark"?"white":"#030229"} fontWeight={700} fontSize={"20px"}>Leasers Detail</Typography>
                <LeasersTable />
              </Grid>
            </Grid>
           </Box>
          
  )
}

export default MainDashboard