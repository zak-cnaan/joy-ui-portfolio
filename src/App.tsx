import { CssBaseline, CssVarsProvider } from "@mui/joy";
import Layout from "./components/Layout";
import './globals.css'

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Layout />
    </CssVarsProvider>
  );
}

export default App;
