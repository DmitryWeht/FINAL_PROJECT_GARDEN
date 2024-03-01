import { Backdrop, Dialog, Grow } from "@mui/material";
import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import closeImage from "../../media/close.svg";
import classes from "./DailyDiscountModal.module.css";
const DailyDiscountModal = ({ isOpen, setIsOpen, product, content }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
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
      <div className={classes.card}>
        <div className={classes.text_box}>
          <h2>50% discount on product of the day!</h2>
          <div onClick={() => setIsOpen(false)} className={classes.close_box}>
            <img src={closeImage} alt="close" />
          </div>
        </div>
        <ProductItem
          {...product}
          productStyles={classes.product_card}
          content="modal"
        />
      </div>
    </Dialog>
  );
};
export default DailyDiscountModal;
