import { Dialog } from "@mui/material";
import React from "react";

const ImageModal = ({ open, handleClose, imageUrl, title }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
        }}
      />
    </Dialog>
  );
};

export default ImageModal;
