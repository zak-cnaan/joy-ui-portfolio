import {
    Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";
import Header from "./Header";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Box component="main" sx={{
        backgroundColor: 'green', 
        py:'40px',
        position:'relative',
        zIndex:10
        }}>
        <Sheet
          sx={{
            width: 300,
            minHeight: "100vh",
            mx: "auto", // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              Welcome!
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="password" />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don't have an account?
          </Typography>
        </Sheet>
      </Box>
      <Box component="footer" sx={{
        py:'20px',
        backgroundColor: 'blue',
        color:'#fff',
        position: 'sticky',
        bottom:0,
        width:'100%'
        }}>
        footer 
        <a href="..." style={{color:'white'}}>Link to </a>

      </Box>
    </div>
  );
}

export default Layout;
