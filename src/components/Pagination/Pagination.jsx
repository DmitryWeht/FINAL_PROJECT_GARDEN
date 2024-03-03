import Pagination from "@mui/material/Pagination";
const CustomPagination = ({ count, handlechange }) => {
  return (
    <div>
      <Pagination
        count={count}
        variant="text"
        sx={{
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "rgba(251, 124, 105, 0.4)",
          },
          "& .MuiPaginationItem-page": {
            color: "#000000",
          },
        }}
        defaultPage={1}
        onChange={handlechange}
      />
    </div>
  );
};

export default CustomPagination;
