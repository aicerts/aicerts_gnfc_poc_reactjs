import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../components/ThemeContext';
import { Box, Snackbar } from '@mui/material';
import SideBar from '../components/Sidebar';
import RoyaltyPassGenration from '../components/RoyaltyPassGenration';
import DelivaryPassGenration from '../components/DelivaryPassGenration';

const PassGenration = () => {
  const { mode } = useThemeContext();
  const [role, setRole] = useState('');

  useEffect(() => {
    // Retrieve role from localStorage
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <Box display="flex" width="100%" height="100%" py={3} bgcolor={mode === 'dark' ? 'black' : '#E5E5EF'} pr={5}>
      <SideBar />
      
      {/* Conditional Rendering based on role */}
      {role === 'admin' || role === 'Leaser' ? <RoyaltyPassGenration /> : <DelivaryPassGenration />}
    </Box>
  );
};

export default PassGenration;
