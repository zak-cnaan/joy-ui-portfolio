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
        textAlign: "center",
        borderTop: 1,
        borderTopColor: "neutral.outlinedBorder",

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
        &copy; 2023 &hearts; <span>zak cnaan</span>
      </Container>
    </Box>
  );
}

export default Footer;
