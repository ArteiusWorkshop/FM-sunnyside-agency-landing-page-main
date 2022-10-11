import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export const Stand = () => {
  return (
    <Box className="secction">
      <Box className="ord">
        <Box className={`secction-image standout`}></Box>
        <Box className="text">
          <Box justifySelf="center" width="85%">
            <Typography className="head fraunces-nine">
              Stand out to the right audience
            </Typography>
            <Typography className="parragraph barlow-six" paddingY={3}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </Typography>
          </Box>
          <Box paddingBottom={5}>
            <Link href="/#" passHref>
              <Button
                variant="text"
                className={`learnmore fraunces-nine sobtn`}
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
