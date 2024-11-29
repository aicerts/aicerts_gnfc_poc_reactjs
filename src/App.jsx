import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/Sidebar";
import MainDashboard from "./components/MainDashboard";

import { Box } from "@mui/material";
import Home from "./pages/Home"
import { ThemeContextProvider } from "./components/ThemeContext";
import PassGenration from "./pages/PassGenration";
// A function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

function App() {
  return (
    <ThemeContextProvider>
        <Box display={"flex"} width={"100vw"} height={"100vh"} bgcolor={"#FAFAFB"} >
      <BrowserRouter>
        {/* If the user is not authenticated, redirect to login page */}
        <Routes>
          <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Home/>} />
          {/* Protected Routes */}
          <Route path="/dashboard" element={isAuthenticated() ? <MainDashboard /> : <Navigate to="/" />} />
          <Route path="/manage-leasers" element={isAuthenticated() ? <PassGenration /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Box>

    </ThemeContextProvider>
  
  );
}

export default App;
