import Layout from "./components/Layout";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Layout />
    </CssVarsProvider>
  );
}

export default App;
