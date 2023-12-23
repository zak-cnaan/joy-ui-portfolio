import { IconButton } from "@mui/joy";
import { IconType } from "react-icons";

function SocialMenuItem(props: { link: string; icon: IconType; v?: any }) {
  return (
    <li style={{ display: "inline-flex" }}>
      <IconButton
        variant={"plain"}
        aria-label="Open in new tab"
        component="a"
        href={props.link}
        sx={(theme) => ({
          "--Icon-fontSize": "var(--joy-fontSize-xl)",

          [theme.breakpoints.up("md")]: {
            "--Icon-fontSize": "var(--joy-fontSize-xl2)",
          },
          [theme.breakpoints.up("xl")]: {
            "--Icon-fontSize": "var(--joy-fontSize-xl3)",
          },
        })}
      >
        <props.icon />
      </IconButton>
    </li>
  );
}

export default SocialMenuItem;
