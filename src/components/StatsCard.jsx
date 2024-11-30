import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { useThemeContext } from './ThemeContext';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: '',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  width:"24.4%",
  height:"100%",
  
}));

const StatDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StatGrowth = styled(Typography)(({ theme, isPositive }) => ({
  color: isPositive ? theme.palette.success.main : theme.palette.error.main,
  fontSize: '0.875rem',
  marginTop: theme.spacing(0.5),
}));

const StatsCard = ({ title, value, iconSrc, growthText, isPositive }) => {
    const theme = useTheme()
    const isDarkMode = false
    const { toggleTheme, mode } = useThemeContext();

  
    
  return (
    <CardContainer sx={{ bgcolor:mode =="dark"?"#343434":"white"  }}>
      <StatDetails>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
       
      </StatDetails>
      <Avatar
        src={iconSrc}
        // alt={title}
        sx={{  width: 40, height: 40, p:1, bgcolor:"#e9ecef" }}
      />
    </CardContainer>
  );
};

export default StatsCard;
