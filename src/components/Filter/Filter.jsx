import { useDispatch, useSelector } from "react-redux";
import {
  minPriceChange,
  maxPriceChange,
  toggleDiscounted,
  sortChange,
} from "../../store/filterSlice";
import Box from "@mui/material/Box";
import classes from "../../components/Filter/Filter.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export const Filter = ({ content }) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "dark" ? classes.dark : "";

  const handleMinPriceChange = (e) => {
    dispatch(minPriceChange(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    dispatch(maxPriceChange(e.target.value));
  };

  return (
    <Box component="form" sx={{ fontFamily: "Montserrat" }}>
      <div className={`${classes.filters} ${themeClass}`}>
        <div className={`${classes.filter_price} ${themeClass}`}>
          <InputLabel
            htmlFor="price"
            sx={{
              marginBottom: "8px",
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: "500",
              color: "black",
              top: "5px",
              "&.dark": {
                color: "white",
              },
            }}
          >
            Price
          </InputLabel>

          <TextField
            sx={{
              width: "112px",
              height: "36px",
              position: "relative",
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#0b710b",
                  color: "#0b710b",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#0b710b",
                transform: "translate(14px, -5px) scale(0.75)", // Изменение положения метки при фокусировке
              },
              "& .MuiInputLabel-root": {
                color: "#888",
                fontSize: "16px",
                top: "-25%",
                left: "0%",
              },
            }}
            type="number"
            step="1.0"
            min="0"
            id="price"
            label="min price"
            placeholder="from"
            inputProps={{
              style: {
                padding: "8px 8px",
                fontSize: "16px",
              },
            }}
            onChange={handleMinPriceChange}
          />
          <TextField
            sx={{
              width: "112px",
              height: "36px",
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: " #0b710b",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#0b710b",
                transform: "translate(14px, -5px) scale(0.75)", // Изменение положения метки при фокусировке
              },
              "& .MuiInputLabel-root": {
                color: "#888",
                fontSize: "16px",
                top: "-25%",
                left: "0%",
              },
            }}
            type="number"
            placeholder="to"
            inputProps={{
              style: {
                padding: "8px 8px",
                fontSize: "16px",
              },
            }}
            step="1.0"
            label="max price"
            min="0"
            onChange={handleMaxPriceChange}
          />
        </div>
        {content !== "sale" && (
          <div className={`${classes.checkbox} ${themeClass}`}>
            Discounted items
            <label className={`${classes.labelForCheckbox} ${themeClass}`}>
              <input
                className={`${classes.inputForCheckbox} ${themeClass}`}
                type="checkbox"
                onChange={(e) => dispatch(toggleDiscounted(e.target.checked))}
              />
              <span></span>
            </label>
          </div>
        )}

        <div className={`${classes.sorted} ${themeClass}`}>
          <label htmlFor="sort" className={classes.sort_label}>
            Sorted
          </label>
          <select
            className={`${classes.sort_select} ${themeClass}`}
            id="sort"
            onChange={(e) => dispatch(sortChange(e.target.value))}
          >
            <option>by default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </Box>
  );
};
