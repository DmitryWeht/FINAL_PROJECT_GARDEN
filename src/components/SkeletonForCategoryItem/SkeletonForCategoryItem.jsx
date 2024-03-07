import { Skeleton } from "@mui/material"; // Импорт компонента Skeleton из Material-UI
import Box from "@mui/material/Box"; // Импорт компонента Box из Material-UI
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
      {/* Скелетон для изображения категории */}
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width="100%"
        height={350}
        sx={{ borderRadius: "12px" }}
      />
      {/* Скелетон для текстового описания категории */}
      <Skeleton
        animation="pulse"
        variant="text"
        sx={{ fontSize: "20px", width: "60%" }}
      />
    </Box>
  );
};

export default SkeletonForCategoryItem;
