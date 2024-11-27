import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Stack } from "@mui/material";
import DeliveryDetails from "./pages/DeliveryDetails";
import './App.css'

function App() {
  return (
    <Stack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delivery" element={<DeliveryDetails />} />
      </Routes>
    </Stack>
  );
}

export default App;
