import { Box, Container } from "@mui/joy";

function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        position: "sticky",
        bottom: 0,

        backgroundColor: "background.surface",
        color: "text.secondary",
        borderTop: 1,
        borderTopColor: "neutral.outlinedBorder",
        textAlign: "center",

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
      <Container>&copy; 2024 &hearts; zak cnaan</Container>
    </Box>
  );
}

export default Footer;
