import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Header = () => {
  return (
    <Box className="mainheader oranges">
      <Typography my={5} className="title fraunces-nine">
        WE ARE CREATIVES
      </Typography>
      <Image
        src="/img/icon-arrow-down.svg"
        alt="Arrow Down"
        width="36px"
        height="114px"
      />
    </Box>
  );
};
