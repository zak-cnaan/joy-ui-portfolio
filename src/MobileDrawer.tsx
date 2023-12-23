import { Box, DialogTitle, Drawer, IconButton, ModalClose } from "@mui/joy";
import { useState } from "react";

function MobileDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
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
  );
}

export default MobileDrawer;
