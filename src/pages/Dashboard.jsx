import { Typography } from "@mui/material";
import LeaserDashboard from "../components/LeaserDashboard";
import MainDashboard from "../components/MainDashboard";
import StokieDashboard from "../components/StokieDashboard";

const Dashboard = () => {
  const role = localStorage.getItem('role'); // Assuming role is stored as a string in localStorage.

  if (role === 'Admin') {
    return <MainDashboard />;
  } else if (role === 'Leaser') {
    return <LeaserDashboard />;
  } else {
    
    return <StokieDashboard/>
  }
};

export default Dashboard;
