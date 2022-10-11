import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Fade from "@mui/material/Fade";

export function UserBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Menú">
        <IconButton
          onClick={handleClick}
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Image
            src="/img/icon-hamburger.svg"
            alt="Logo sunny side"
            width="24"
            height="18"
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          elevation: 0,

          sx: {
            display: "flex",
            justifyContent: "center",
            width: "90%",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 0,
              height: 0,
              transform: "translateY(-50%) ",
              zIndex: 0,
              borderStyle: "solid",
              borderWidth: " 0 0 30px 30px",
              borderColor: "transparent transparent #fff transparent",
            },
          },
        }}
        TransitionComponent={Fade}
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          About
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Services
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Projects
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Contact
        </MenuItem>
      </Menu>
    </>
  );
}
