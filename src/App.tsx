import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import Layout from "./components/Layout";
//import Layout from "./Layout";

function App() {
  return (
    <CssVarsProvider>
       <GlobalStyles styles={{
        // The {selector} is the CSS selector to target the icon.
        // We recommend using a class over a tag if possible.
        svg: {
          color: "var(--Icon-color)",
          margin: "var(--Icon-margin)",
          fontSize: "var(--Icon-fontSize, inherit)",
          width: "1em",
          height: "1em"
        },

      }}></GlobalStyles>
      <CssBaseline />
      <Layout />
    </CssVarsProvider>
  );
}

export default App;
