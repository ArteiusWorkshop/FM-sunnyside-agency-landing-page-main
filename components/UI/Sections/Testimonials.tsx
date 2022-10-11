import { Avatar, Box, Typography } from "@mui/material";

export const Testimonials = () => {
  return (
    <Box className="testimonials">
      <Box className="testimonials-header">
        <Box width="85%">
          <Typography className="testimonials-head fraunces-nine">
            Client testimonials
          </Typography>
        </Box>
      </Box>
      <Box className="testimonial">
        <Box className="text">
          <Box width="85%">
            <Box display="flex" justifyContent="center" width="100%">
              <Avatar
                alt="Emily R"
                src="/img/image-emily.jpg"
                sx={{ width: "80px", height: "80px" }}
              />
            </Box>
            <Typography className="barlow-six ttext" paddingY={3}>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </Typography>
            <Typography className="fraunces-nine tname">Emily R.</Typography>
            <Typography className="barlow-six tfoot">
              Marketing Director
            </Typography>
          </Box>
        </Box>
        <Box className="text">
          <Box width="85%">
            <Box display="flex" justifyContent="center" width="100%">
              <Avatar
                alt="Thomas S."
                src="/img/image-thomas.jpg"
                sx={{ width: "80px", height: "80px" }}
              />
            </Box>
            <Typography className="barlow-six ttext" paddingY={3}>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </Typography>
            <Typography className="fraunces-nine tname">Thomas S.</Typography>
            <Typography className="barlow-six tfoot">
              Chief Operating Officer
            </Typography>
          </Box>
        </Box>
        <Box className="text">
          <Box width="85%">
            <Box display="flex" justifyContent="center" width="100%">
              <Avatar
                alt="Emily R"
                src="/img/image-jennie.jpg"
                sx={{ width: "80px", height: "80px" }}
              />
            </Box>
            <Typography className="barlow-six ttext" paddingY={3}>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </Typography>
            <Typography className="fraunces-nine tname">Jennie F.</Typography>
            <Typography className="barlow-six tfoot">Business Owner</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
