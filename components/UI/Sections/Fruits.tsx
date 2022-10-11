import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Fruits = () => {
  return (
    <Box className="gdp">
      <Box className="header cherry">
        <Box className="texto">
          <Box justifySelf="center" width="85%">
            <Typography className="head fraunces-nine">
              Graphic design
            </Typography>
            <Typography className="parragraph barlow-six" paddingY={3}>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="header mandarin">
        <Box className="texto">
          <Box justifySelf="center" width="85%">
            <Typography className="head fraunces-nine">Photography</Typography>
            <Typography className="parragraph barlow-six" paddingY={3}>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
