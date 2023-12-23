import { Box, Container } from "@mui/joy";
import ChangeTheme from "./ChangeTheme";
import MobileDrawer from "./MobileDrawer";
import TopNav from "./menues/TopNav";
import Logo from "./Logo";

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
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
      <Logo />
        <Box
          sx={{
            ml: "auto",
            mr: 2,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <TopNav variant="web" />
        </Box>
        <ChangeTheme />
        <MobileDrawer />
      </Container>
    </Box>
  );
}

export default Header;
