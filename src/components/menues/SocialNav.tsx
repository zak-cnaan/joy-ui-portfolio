import { Box } from "@mui/joy";
import SocialMenuItem from "./SocialMenuItem";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

function SocialNav() {
  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        mb:1,
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <SocialMenuItem link="..." icon={FaFacebookF} />
      <SocialMenuItem link="..." icon={TbBrandGithubFilled} />
      <SocialMenuItem link="..." icon={FaLinkedinIn} />

    </Box>
  );
}

export default SocialNav;
