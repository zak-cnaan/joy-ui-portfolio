import { SiLinkerd } from "react-icons/si";
import { styled } from "@mui/joy/styles";

const Icon = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontWeight: "bold",
  textDecoration: "none",
  [theme.breakpoints.up("xl")]: {
    gap: 16,
  },
  "& svg": {
    width: 24,
    height: 24,
    [theme.breakpoints.up("md")]: {
      width: 36,
      height: 36,
    },
    [theme.breakpoints.up("xl")]: {
      width: 42,
      height: 42,
    },
  },
}));

function Logo() {
  return (
    <Icon href="...">
      <SiLinkerd />
      <span>zak cnaan</span>
    </Icon>
  );
}

export default Logo;
