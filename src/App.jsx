import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/Sidebar";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import { ThemeContextProvider } from "./components/ThemeContext";
import PassGenration from "./pages/PassGenration";
import Dashboard from "./pages/Dashboard";


// A function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Box display={"flex"} width={"100vw"} height={"100vh"} bgcolor={"#FAFAFB"}>
          {isAuthenticated() && <SideBar />} {/* Sidebar remains persistent */}
          <Box flexGrow={1}>
            <Routes>
              {/* Public Route */}
              <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Home />} />
              {/* Protected Routes */}
              <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/pass-details" element={isAuthenticated() ? <PassGenration /> : <Navigate to="/" />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
