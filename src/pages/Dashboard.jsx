import * as React from "react";
import { extendTheme, styled, ThemeProvider } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import StatsCard from "../components/StatsCard";
import LeasersTable from "../components/LeasersTable";
import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MainDashboard from "../components/MainDashboard";
import { useTheme } from "@emotion/react";

const NAVIGATION = [

  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <HomeIcon sx={{ color: "#140D49 !important" }}
 />,
  },
  {
    segment: "manage-leasers",
    title: "Manage Leasers",
    icon: <InsertChartIcon sx={{ color: "#140D49 !important" }} />,
  },
  {
    kind: "divider",
  },



];

const demoTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#F5F5F5", // Set the light theme background color
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "black", // Dark background color
        },
      },
    },
    
  },
  components:{
    MuiIconButton:{
      styleOverrides:{
        root:{
          backgroundColor:""
        }
      }
    },
    MuiListItem:{
      styleOverrides:{
        root:{
          color:"#140D49",
          
        }
      }
      
    },
    MuiLink:{
      styleOverrides:{
        root:{
          backgroundColor:"red"
        }
      }
    }

    
  },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(path),  // Update pathname on navigation
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function Dashboard(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  // const theme = extendTheme()
  const theme = useTheme(); // Access the current theme
  const isDarkMode = theme?.palette?.mode === "dark"; // Use optional chaining to avoid undefined
  console.log("Is dark mode:", isDarkMode);


  

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case "/dashboard":
        return (
          <>
        <MainDashboard/>
          </>
        );
      case "/manage-leasers":
        return <Typography variant="h4">Orders Content</Typography>;
      default:
        return <Typography variant="h4">Page not found</Typography>;
    }
  };

  return (
    <ThemeProvider theme={demoTheme}>
       <AppProvider
    
    navigation={NAVIGATION}
    
    
    router={router}
    theme={demoTheme}
    window={demoWindow}
    branding={{
      logo: <img src="/icons/AG.png" alt="MUI logo" />,
      title: (
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px", // Adjust font size as needed
            color: "#140D49", // Set the desired color (example: red)
            fontWeight: 700, // Optional: adjust font weight
          }}
        >
          ASSURANCE GATEWAY
        </Typography>
      ),
      
    }}
  >
    <DashboardLayout >
      <PageContainer>
        {renderContent()} {/* Dynamically render content based on pathname */}
      </PageContainer>
    </DashboardLayout>
  </AppProvider>

    </ThemeProvider>
   
  );
}
