import { Dialog, Grow } from "@mui/material";

const ImageModal = ({ open, handleClose, imageUrl, title }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      BackdropProps={{
        transitionDuration: 500,
      }}
      TransitionComponent={Grow}
      TransitionProps={{
        timeout: 500,
      }}
      sx={{
        borderRadius: "16px",
        "& .MuiPaper-root": {
          borderRadius: "16px",
        },
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          maxWidth: "100%",
          maxHeight: "calc(100vh - 64px)",
          width: "auto",
          height: "auto",
          display: "block",
          objectFit: "",
        }}
      />
    </Dialog>
  );
};

export default ImageModal;
