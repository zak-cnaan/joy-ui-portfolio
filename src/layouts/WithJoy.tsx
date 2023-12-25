import '../assets/styles/globals.css'
import { CssBaseline, CssVarsProvider } from "@mui/joy";


import { Outlet } from "react-router-dom";

function WithJoy() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Outlet />
    </CssVarsProvider>
  );
}

export default WithJoy;
