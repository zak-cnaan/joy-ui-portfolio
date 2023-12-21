import { Box, Button, DialogTitle, Drawer, IconButton, ModalClose, Stack } from "@mui/joy";
import React from "react";

function Header() {
    const [open, setOpen] = React.useState(false);
    return (
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <IconButton
            size="md"
            variant="outlined"
            color="neutral"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              borderRadius: '50%',
            }}
          >
          </IconButton>
          <Button
            variant="plain"
            color="neutral"
            component="a"
            href="/joy-ui/getting-started/templates/email/"
            size="sm"
            sx={{ alignSelf: 'center' }}
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
            sx={{ alignSelf: 'center' }}
          >
            Team
          </Button>
          <Button
            variant="plain"
            color="neutral"
            component="a"
            href="/joy-ui/getting-started/templates/files/"
            size="sm"
            sx={{ alignSelf: 'center' }}
          >
            Files
          </Button>
        </Stack>
        <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
          <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          </IconButton>
          <Drawer
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <ModalClose />
            <DialogTitle>Acme Co.</DialogTitle>
          </Drawer>
        </Box>
  
       
      </Box>
    );
  }

  export default Header