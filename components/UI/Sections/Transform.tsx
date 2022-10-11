import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export const Transform = () => {
  return (
    <Box className="secction">
      <Box className="trd">
        <Box className={`secction-image transform`}></Box>
        <Box className="text">
          <Box justifySelf="center" width="85%">
            <Typography className="head fraunces-nine">
              Transform your brand
            </Typography>
            <Typography className=" barlow-six" paddingTop={3}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Typography>
          </Box>
          <Box paddingBottom={5}>
            <Link href="/#" passHref>
              <Button
                variant="text"
                className={`learnmore fraunces-nine lmbtn`}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
