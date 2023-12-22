import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";
import Header from "./Header";
import Theming from "./Theming";
import FormExample from "./FormExample";
import Footer from "./Footer";

function Layout() {
  return (
    <Box sx={{minHeight: '100vh', display:'flex', flexDirection:'column', flexWrap:'wrap'}}>
      <Header />
      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: 10,
          backgroundColor: "background.body",
          flexGrow:1
        }}
      >
        <Theming />
        {/* <FormExample /> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
