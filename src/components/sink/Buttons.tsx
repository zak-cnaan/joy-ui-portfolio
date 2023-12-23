import { Button, IconButton, Stack } from "@mui/joy";

function Buttons() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
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
  );
}

export default Buttons;
