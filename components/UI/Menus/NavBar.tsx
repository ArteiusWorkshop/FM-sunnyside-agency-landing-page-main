import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image";
import { UserBar } from "./";
import Link from "next/link";

export const NavBar = () => {
  return (
    <AppBar className="navbar" elevation={0}>
      <Toolbar>
        <Image
          src="/img/logo.svg"
          alt="Logo sunny side"
          width="124"
          height="24"
        />
        <Box flex={1} />
        <Box sx={{ display: { md: "none", sm: "block" } }}>
          <UserBar />
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <Link href="/#" passHref>
            <Button variant="text">About</Button>
          </Link>
          <Link href="/#" passHref>
            <Button variant="text">Services</Button>
          </Link>
          <Link href="/#" passHref>
            <Button variant="text">Projects</Button>
          </Link>
          <Link href="/#" passHref>
            <Button variant="text">Contact</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
