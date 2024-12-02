import React, { useEffect, useState } from "react";
import BlurBox from "../ui-override/BlurBox";
import {
  Alert,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import StyledButton from "../ui-override/Styledbutton";
import FormInput from "../ui-override/input";
import { Email, Lock } from "@mui/icons-material";
import FormButton from "../ui-override/FormButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import userStore from "../store/userStore"
import BlurMenuItem from "../ui-override/BlurMenuItem"

const SignupForm = ({ setShowSignup,setShowLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To show loading during request
  const [role, setRole] = useState(""); // State for selected role
  const roles = ["Admin","Leaser", "Distributor", "Retailer", "Company"];
  const [error, setError] = useState("");
  const setUser = userStore((state) => state.setUser); // Get the setUser function from the store
  const navigate = useNavigate(); // Use navigate to redirect to /dashboard

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timeout on unmount or error change
    }
  }, [error]);

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if the required fields are filled
    if (!email || !password || !role) {
      setError("Please fill in all fields");
      return;
    }

    // Prepare the payload for the API
    const payload = {
      name: name, // Replace with dynamic name if needed
      email: email,
      role: role,
      password: password,
    };

    setLoading(true); // Set loading to true when API request starts

    try {
      // Make the API request
      const response = await fetch(import.meta.env.VITE_USER_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "SUCCESS") {
        // Handle successful signup
        //DO SOMETHING
        setUser(result.data)
       
        setShowLogin(true)
      } else {
        // Handle errors (e.g., email already exists)
        setError(`Error: ${result.message || "Something went wrong"}`);
        setEmail("");
        setName("");
        setPassword("");
        setRole("");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during signup:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <BlurBox sx={{ width: "30%" }}>
      <Typography variant="h5" color="white" fontWeight={"bold"}>
        Signup
      </Typography>
      <Typography variant="subtitle" color="white">
        Signup with your email
      </Typography>
      <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
        <FormInput
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<Email sx={{ color: "white" }} />}
        />
        <FormInput
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Email sx={{ color: "white" }} />}
        />

        <FormControl fullWidth>
          <InputLabel id="role-select-label" sx={{ color: "black" }}>
            Role
          </InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{
              backgroundColor:"white",
              color: "black",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Remove default border
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Remove border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Remove border when focused
              },
              ".MuiSvgIcon-root": { color: "white" },
              border: "2px dashed white", // Custom dashed border

              "& .MuiInputLabel-root": {
                color: "black",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  background: "white", // Semi-transparent white
                 
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow
                  overflow: "hidden", // Prevents content overflow
                },
              },
            }}
          >
            {roles.map((roleOption) => (
              <BlurMenuItem key={roleOption} value={roleOption}>
              {roleOption.toUpperCase()}
            </BlurMenuItem>
            ))}
          </Select>
        </FormControl>

        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock sx={{ color: "white" }} />}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
        <FormButton disabled={loading} onClick={handleSignup}>
          {loading ? "Logging in..." : "Sign up"}{" "}
          <ArrowRightAltIcon className="arrow" />
        </FormButton>
        <FormButton onClick={() => setShowLogin(true)}>
          Back <ArrowRightAltIcon className="arrow" />
        </FormButton>
      </Box>

      {error && (
        <Alert
          style={{ position: "absolute", right: 5, top: 5 }}
          variant="filled"
          severity="error"
          sx={{ mt: 2 }}
        >
          {error}
        </Alert>
      )}
    </BlurBox>
  );
};

export default SignupForm;
