import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// Create a styled Grid component
const StyledGridItem = styled(Grid)(({ theme }) => ({
  paddingLeft: theme.spacing(1), // Corresponds to px={1}
  paddingRight: theme.spacing(1), // Corresponds to px={1}\
  border:"1px solid #E5E5EF",

}));

// Default props for consistency
StyledGridItem.defaultProps = {
  item: true, // Ensures it's always a Grid item
  xs: 4,      // Default to xs={4}, can be overridden
};

export default StyledGridItem;
