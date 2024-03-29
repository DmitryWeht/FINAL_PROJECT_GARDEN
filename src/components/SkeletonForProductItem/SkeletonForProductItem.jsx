import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const SkeletonForProductItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        height: "422px",
        borderRadius: "12px",
      }}
    >
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width="100%"
        height={284}
        sx={{ borderRadius: "12px 12px 0 0;", width: "100%" }}
      />
      <Box
        sx={{
          paddingLeft: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          gap: "16px",
        }}
      >
        <Skeleton
          animation="pulse"
          variant="text"
          sx={{
            fontSize: "20px",
            width: "80%",
          }}
        />
        <Skeleton
          animation="pulse"
          variant="text"
          sx={{
            fontSize: "20px",
            width: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default SkeletonForProductItem;
