import { useDispatch, useSelector } from "react-redux";
import {
  minPriceChange,
  maxPriceChange,
  toggleDiscounted,
  sortChange,
} from "../../store/filterSlice";
import classes from "../../components/Filter/Filter.module.css";

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
    <form className={`${themeClass}`}>
      {" "}
      {}
      <div className={`${classes.filters} ${themeClass}`}>
        {" "}
        {}
        <div className={`${classes.filter_price} ${themeClass}`}>
          {" "}
          {}
          <label htmlFor="price" className={`${themeClass}`}>
            Price
            <input
              className={`${classes.filter_inputs} ${themeClass}`}
              type="number"
              step="1.0"
              min="0"
              id="price"
              placeholder="from"
              onChange={handleMinPriceChange}
            />
            <input
              className={`${classes.filter_inputs} ${themeClass}`}
              type="number"
              placeholder="to"
              step="1.0"
              min="0"
              onChange={handleMaxPriceChange}
            />
          </label>
        </div>
        {content !== "sale" && (
          <div className={classes.checkbox}>
            Discounted items
            <label className={classes.labelForCheckbox}>
              <input
                className={classes.inputForCheckbox}
                type="checkbox"
                onChange={(e) => dispatch(toggleDiscounted(e.target.checked))}
              />
              <span></span>
            </label>
          </div>
        )}
        <div className={`${classes.sorted} ${themeClass}`}>
          <label
            htmlFor="sort"
            className={`${classes.sort_label} ${themeClass}`}
          >
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
    </form>
  );
};
