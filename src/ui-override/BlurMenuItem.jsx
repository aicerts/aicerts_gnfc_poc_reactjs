import { MenuItem } from "@mui/material";

function BlurMenuItem({ children, sx, ...props }) {
  return (
    <MenuItem
      sx={{
        color: "#3f37c9", // White text color
        background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
        backdropFilter: "blur(8px)", // Blur effect
        "&:hover": {
          backgroundColor: "#3f37c9", // Slightly darker on hover
          color:"white"
        },
        borderRadius: 1, // Optional rounded edges
        ...sx, // Allow for custom styles to be passed
      }}
      {...props} // Forward additional props (like `value`, `onClick`, etc.)
    >
      {children}
    </MenuItem>
  );
}

export default BlurMenuItem;
