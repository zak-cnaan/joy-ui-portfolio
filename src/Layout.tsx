import { Box } from "@mui/joy";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";

function Layout() {
  return (
    <Box sx={{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column'
    }}>
      <Header />
      <Box component='main' sx={{
        backgroundColor:'background.body',
        flexGrow:1,
        position:'relative',
        zIndex:20
        }}>
            <Cards />
        </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
