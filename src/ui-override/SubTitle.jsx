import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


// Create a styled Typography component
export const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600, // Example of adding default styling
  color: theme.palette.mode === "dark" ? "white" : "#605576", // Correct way to use theme.mode
  padding:5,
  


}));

// Default props to ensure it's always `subtitle2`
Subtitle.defaultProps = {
  variant: 'subtitle2',
};

export const SubtitleValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700, // Example of adding default styling
  color: theme.palette.text.primary, // Example of using theme
  paddingLeft:5,
  borderRadius:"5px"
  


}));

// Default props to ensure it's always `subtitle2`
SubtitleValue.defaultProps = {
  variant: 'subtitle2',
};


