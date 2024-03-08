import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
const SkeletonForCategoryItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width="100%"
        height={350}
        sx={{ borderRadius: "12px" }}
      />

      <Skeleton
        animation="pulse"
        variant="text"
        sx={{ fontSize: "20px", width: "60%" }}
      />
    </Box>
  );
};

export default SkeletonForCategoryItem;
