import { Button, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const FormButton = styled(Button)(({ theme }) => ({
  padding: '15px 15px',
  color: 'white',
  background: '#140D49',
  borderRadius: 12,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.3s', // Smooth transition for hover effect

  // Default state (without arrow)
  '& .arrow': {
    display: 'none',
    marginLeft: '8px',        // Space between text and arrow
    fontSize: '20px',
    color: '#3f37c9',         // Arrow color matches the button text color on hover
  },

  ':hover': {
    background: 'white',
    color: '#3f37c9', // Make text color match the background on hover
  },

  ':hover .arrow': {
    display: 'inline-flex',  // Show the arrow on hover
    color: '#3f37c9',        // Color when hovered
  },
}));

export default FormButton;
