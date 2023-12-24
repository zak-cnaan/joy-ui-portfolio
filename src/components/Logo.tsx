// import { SiLinkerd } from "react-icons/si";
import { styled } from "@mui/joy/styles";

const Icon = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontWeight: "bold",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  fontSize:theme.fontSize.md,
//   [theme.breakpoints.up("xl")]: {
//     gap: 16,
//   },
//   "& svg": {
//     width: 24,
//     height: 24,
    [theme.breakpoints.up("sm")]: {
        fontSize:theme.fontSize.lg

    },
    [theme.breakpoints.up("xl")]: {
        fontSize:theme.fontSize.xl2
    },
//   },
}));

function Logo() {
  return (
    <Icon href="...">
      {/* <SiLinkerd /> */}
      <span>zak cnaan</span>
    </Icon>
  );
}

export default Logo;
