import { Button, IconButton, useColorScheme } from "@mui/joy";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
     
     <IconButton disabled={!true} variant="solid"
        onClick={toggleDarkMode}
      >
         <DarkModeSwitch
        checked={mode === "light"}
        onChange={() => null}
        size={24}
      />
      </IconButton>
      <IconButton disabled={!true} variant="outlined"
        onClick={toggleDarkMode}
      >
         <DarkModeSwitch
        checked={mode === "light"}
        onChange={() => null}
        size={24}
      />
      </IconButton>
      <IconButton disabled={!true} variant="plain"
        onClick={toggleDarkMode}
      >
         <DarkModeSwitch
        checked={mode === "light"}
        onChange={() => null}
        size={24}
      />
      </IconButton>
      <IconButton disabled={!true} variant="soft"
        onClick={toggleDarkMode}
      >
         <DarkModeSwitch
        checked={mode === "light"}
        onChange={() => null}
        size={24}
      />
      </IconButton>
    </>
  );
}

export default ModeToggle;
