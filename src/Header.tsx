import { Box, Container } from "@mui/joy";
import ChangeTheme from "./ChangeTheme";
import MobileDrawer from "./MobileDrawer";

function Header() {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        position: "sticky",
        top: 0,
        zIndex: 30,
        backgroundColor: "background.surface",
        color: "text.secondary",
        borderBottom: 1,
        borderBottomColor: "neutral.outlinedBorder",

        py: 2,
        fontSize: "sm",

        [theme.breakpoints.up("md")]: {
          py: 3,
          fontSize: "md",
        },
        [theme.breakpoints.up("xl")]: {
          py: 4,
          fontSize: "lg",
        },
      })}
    >
      <Container>
        <a href="...">Logo</a>
        <ChangeTheme />
        <MobileDrawer />
      </Container>
    </Box>
  );
}

export default Header;
