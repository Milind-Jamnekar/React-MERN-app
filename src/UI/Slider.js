import { IconButton, Slide, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Fragment } from "react";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Slider({ open, handleClose }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        color="primary"
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User Added"
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
}

export default Slider;
