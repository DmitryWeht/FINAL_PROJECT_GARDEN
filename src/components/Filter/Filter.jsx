import { useDispatch } from "react-redux";
import {
  minPriceChange,
  maxPriceChange,
  toggleDiscounted,
  sortChange,
} from "../../store/filterSlice";
import classes from "../../components/Filter/Filter.module.css";

export const Filter = ({content}) => {
  const dispatch = useDispatch();

  const handleMinPriceChange = (e) => {
    console.log("Min Price:", e.target.value); 
    dispatch(minPriceChange(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    console.log("Max Price:", e.target.value); 
    dispatch(maxPriceChange(e.target.value));
  };

  return (
    <form>
      <div className={classes.filters}>
        <div className={classes.filter_price}>
          <label htmlFor="price">
            Price
            <input
              className={classes.filter_inputs}
              type="number"
              step="1.0"
              min="0"
              id="price"
              placeholder="from"
              onChange={handleMinPriceChange}
            />
            <input
              className={classes.filter_inputs}
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

        <div className={classes.sorted}>
        <label htmlFor="sort" className={classes.sort_label}>
            Sorted
          </label>
          <select
            className={classes.sort_select}
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
