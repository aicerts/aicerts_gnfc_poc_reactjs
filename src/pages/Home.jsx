import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BlurBox from "../ui-override/BlurBox";
import StyledButton from "../ui-override/Styledbutton";
import { Login } from "@mui/icons-material";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm"

const Home = () => {
  const [showLogin, setShowLogin] = useState(false); // State to toggle between Home and Login
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
      }}
    >
      {/* Home Content */}
      {!showLogin && !showSignup && ( // Only render Home when showLogin is false
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "left 0.5s ease-in-out",
            display: "flex",
            justifyContent: "center",
            py: 5,
          }}
        >
          <Box display={"flex"} width={"50%"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h2" fontWeight={"bold"} color="white">
              Website Name
            </Typography>
            <Typography variant="subtitle1" color="white" sx={{ mb: 2 }}>
              Introducing our innovative decentralized eVault (dApp), a secure
              and immutable solution for storing personal files on the
              blockchain. Safeguard your important documents and data, ensuring
              they remain tamper-proof and accessible only to you, with the
              power of blockchain technology at your fingertips.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={2}
              width={"50%"}
            >
              <StyledButton
                variant="contained"
                onClick={() => setShowLogin(true)}
                sx={{ width: "50%" }}
              >
                LOGIN
              </StyledButton>
              <StyledButton onClick={()=>setShowSignup(true)} sx={{ width: "50%" }}>SIGNUP</StyledButton>
            </Box>
          </Box>
        </Box>
      )}

      {/* Login Component */}
      {showLogin && ( // Only render Login when showLogin is true
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LoginForm setShowLogin={setShowLogin} />
        </Box>
      )}

{showSignup && ( // Only render Login when showLogin is true
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SignupForm setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
        </Box>
      )}
    </Stack>
  );
};

export default Home;
