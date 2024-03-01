import React from "react";
import { useEffect } from "react";
import classes from "./ModalShoppingCart.module.css";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { Backdrop, Dialog, Grow } from "@mui/material";

const ModalShoppingCart = ({ open, handleCloseModal }) => {
  console.log("open in ModalShoppingCart:", open);

  useEffect(() => {
    console.log("open changed:", open);
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        transitionDuration: 500,
      }}
      TransitionComponent={Grow}
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
        <div  className={classes.modal_content}>
          <h2>
            Congratulations!
          </h2>
          <IconButton
            onClick={() => {
              handleCloseModal();
            }}
            className={classes.icon_close}
            style={{ width: "44px",
            height: "44px",
            color: "#FFFFFF",
            }}
            autoFocus
            color="inherit"
          >
            <AiOutlineClose />
          </IconButton>
        </div>

        <div className={classes.modal_text}>
          <p
            style={{
              fontSize: "clamp(1.125rem, 1.083rem + 0.19vw, 1.25rem)",
              fontWeight: "600",
              fontFamily: "Montserrat",
              color: " #FFFFFF",
              marginBottom: "20px",
              whiteSpace: 'pre-line',
              lineHeight: "22px",
            }}
          >
            Your order has been successfully placed on the website.
            {"\n"} {"\n"}
            A manager will contact you shortly to confirm your order.
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalShoppingCart;
