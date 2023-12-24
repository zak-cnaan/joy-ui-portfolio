import { Button, Typography } from "@mui/joy";
import css from './hero1.module.css';
function Hero1() {
  return (
    <div className={css.container}>
      <Typography level={"h1"}>
        Start coding <span>instantly</span>
        <br />
        with Codespaces
      </Typography>
      <Typography>
        Spin up fully configured dev environments in the cloud that start in
        seconds with up to 60 hours a month free.
      </Typography>
      <div>
        <Button variant="solid">Get started for free</Button>
        <Button variant="plain">Plans and pricing</Button>
        <Button variant="solf">Get started for free</Button>
        <Button variant="outlined">Plans and pricing</Button>
      </div>
    </div>
  );
}

export default Hero1;
