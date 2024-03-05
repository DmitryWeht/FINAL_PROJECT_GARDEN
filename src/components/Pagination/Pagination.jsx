import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ count, handlechange }) => {
  const theme = useSelector((state) => state.theme.theme);

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
            color: theme === "dark" ? "white" : "black",
          },
          "& .MuiPaginationItem-previousNext": {
            color: theme === "dark" ? "white" : "black",
          },
        }}
        defaultPage={1}
        onChange={handlechange} //функция служит для определения обработчика события изменения страницы
      />
    </div>
  );
};

export default CustomPagination;
