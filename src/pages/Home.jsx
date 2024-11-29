import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BlurBox from "../ui-override/BlurBox";
import StyledButton from "../ui-override/Styledbutton";
import { Login } from "@mui/icons-material";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm"

const Home = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between Home and Login
  const [showSignup, setShowSignup]=useState(false)

  return (
    <Stack
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: `
         
          url(/BG.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden", // Prevent scrollbars during animation
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
    {
      showLogin ?( <LoginForm setShowLogin={setShowLogin}/>):(<SignupForm setShowLogin={setShowLogin}/>)
    }
    </Stack>
  );
};

export default Home;
