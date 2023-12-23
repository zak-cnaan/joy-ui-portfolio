import {
  Box,
  Container,
  DialogTitle,
  Drawer,
  IconButton,
  ModalClose,
} from "@mui/joy";
import { useState } from "react";
import TopNav from "./menues/TopNav";
import { FaBars } from "react-icons/fa6";

function MobileDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <FaBars />
      </IconButton>
      <Drawer
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <DialogTitle>Zak Cnaan.</DialogTitle>

        <div>
          <Container>
            <TopNav variant="mobile" />
          </Container>
        </div>
      </Drawer>
    </Box>
  );
}

export default MobileDrawer;
