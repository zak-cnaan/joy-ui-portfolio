import { Box } from "@mui/joy";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./sink/Cards";
import Theming from "./sink/Theming";

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
        <Cards />
        <Theming />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
