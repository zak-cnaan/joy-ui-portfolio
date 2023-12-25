import { Box } from "@mui/joy";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "background.body",
          flexGrow: 1,
          position: "relative",
          zIndex: 20,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
