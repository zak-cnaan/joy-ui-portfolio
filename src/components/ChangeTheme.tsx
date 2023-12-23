import { IconButton, useColorScheme } from "@mui/joy";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

function ChangeTheme() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <IconButton variant={"solid"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"outlined"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"plain"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"soft"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
    </>
  );
}

export default ChangeTheme;
