import {
  Box,
  Button,
  Container,
  DialogTitle,
  Drawer,
  IconButton,
  ModalClose,
  Sheet,
  Stack,
} from "@mui/joy";
import React from "react";
import ModeToggle from "./ModeToggle";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet
      component="header"
      sx={(theme) => (
        {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        zIndex:20,
        top: 0,

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
      }
  )}
    >
      <Container>
        <a href="...">Logo</a>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <ModeToggle />
          <IconButton
            size="md"
            variant="outlined"
            color="neutral"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderRadius: "50%",
            }}
          >
            IconButton
          </IconButton>
          <Button
            variant="plain"
            color="neutral"
            component="a"
            href="/joy-ui/getting-started/templates/email/"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            Email
          </Button>
          <Button
            variant="plain"
            color="neutral"
            aria-pressed="true"
            component="a"
            href="/joy-ui/getting-started/templates/team/"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            Team
          </Button>
          <Button
            variant="plain"
            color="neutral"
            component="a"
            href="/joy-ui/getting-started/templates/files/"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            Files
          </Button>
        </Stack>
        <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
          <IconButton
            variant="plain"
            color="neutral"
            onClick={() => setOpen(true)}
          >
            Open Drawer
          </IconButton>
          <Drawer
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <ModalClose />
            <DialogTitle>Acme Co.</DialogTitle>
          </Drawer>
        </Box>
      </Container>
    </Sheet>
  );
}

export default Header;
