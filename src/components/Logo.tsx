// import { SiLinkerd } from "react-icons/si";
import { styled } from "@mui/joy/styles";

    const bp1 = getComputedStyle(document.documentElement)
    .getPropertyValue('--bp1');

    const up = `@media (min-Width: ${bp1})`;

const Icon = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontWeight: "bold",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  fontSize:theme.fontSize.md,
  [up]:{
    color:'red'

  },
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
