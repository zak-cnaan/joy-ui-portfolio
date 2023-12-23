import { Box } from "@mui/joy";

const topNavLinks = [
  { url: "...", text: "About" },
  { url: "...", text: "Home" },
  { url: "...", text: "Contact" },
];

function TopNav(props: { variant: "web" | "mobile" }) {
  return (
    <Box
      component={"ul"}
      sx={{
        p: 0,
        m: 0,
        listStyle: "none",
        ...(props.variant == "web" && {
          display: "flex",
          gap: 2,
        }),
        ...(props.variant == "mobile" && {
          display: "flex",
          flexDirection: "column",
          paddingTop: 4,
          gap: 2,
        }),
      }}
    >
      {topNavLinks.map((link) => (
        <li>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </Box>
  );
}

export default TopNav;
