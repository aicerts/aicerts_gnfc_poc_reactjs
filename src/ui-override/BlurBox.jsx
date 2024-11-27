import { Box } from '@mui/material';

function BlurBox({ children, sx }) {
  return (
    <Box
    sx={{
      background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
      backdropFilter: 'blur(8px)',
      width: '100%', // Default value, can be overridden
      maxWidth: '900px', // Equivalent to maxWidth="md"
      marginX: 2,
      zIndex: 1300, // Keeps it on top of other elements
      padding: 3,
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'auto', // Handles scroll if content overflows
    
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      flexDirection: 'column',
      gap: 2,
      ...sx, // Merge and prioritize styles passed as props
    }}
  >
  
      {children}
    </Box>
  );
}

export default BlurBox;
