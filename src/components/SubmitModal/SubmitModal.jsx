import { Backdrop, Dialog, Slide } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./SubmitModal.module.css";

const SubmitModal = ({ open, handleCloseModal, content }) => {
  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        transitionDuration: 500,
      }}
      TransitionComponent={Slide}
      TransitionProps={{
        timeout: 500,
      }}
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        "& .MuiPaper-root": {
          borderRadius: "16px",
        },
      }}
    >
      <div className={classes.content}>
        <div className={classes.modal_content}>
          <h2>Congratulations!</h2>
          <div className={classes.icon_close}>
            <IconButton
              onClick={() => {
                handleCloseModal();
              }}
              style={{ width: "44px", height: "44px", color: "#FFFFFF" }}
              autoFocus
              color="inherit"
            >
              <AiOutlineClose />
            </IconButton>
          </div>
        </div>

        <div className={classes.modal_text}>
          {content === "form" ? (
            <p>
              Your request for a 5% discount has been successfully submitted.
              Please expect an email confirmation shortly.
            </p>
          ) : (
            <p>
              Your order has been successfully placed on the website.
              {"\n"} {"\n"}A manager will contact you shortly to confirm your
              order.
            </p>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default SubmitModal;