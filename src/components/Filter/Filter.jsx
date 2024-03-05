import { useDispatch } from "react-redux";
import {
  minPriceChange,
  maxPriceChange,
  toggleDiscounted,
  sortChange,
} from "../../store/filterSlice";
import Box from '@mui/material/Box';
import classes from "../../components/Filter/Filter.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export const Filter = ({ content }) => {
  const dispatch = useDispatch();

  const handleMinPriceChange = (e) => {
    dispatch(minPriceChange(Number(e.target.value)));
  };
  
  const handleMaxPriceChange = (e) => {
    dispatch(maxPriceChange(Number(e.target.value)));
  };
  
  return (
    <Box component="form"
      sx={{ fontFamily: 'Montserrat' }}>
      <div className={classes.filters}>
        <div className={classes.filter_price}>
          <InputLabel
            htmlFor="price"
            sx={{
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Montserrat',
              fontWeight: '500',
              color: '#282828',
              top: '5px',
            }}>
            Price
          </InputLabel>

          <TextField
            sx={{
              width: '112px',
              height: '36px',
              position: 'relative',
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#282828',
                color: '#282828',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#282828',
                transform: 'translate(14px, -5px) scale(0.75)', 
              },
              '& .MuiInputLabel-root': {
                color: '#888',
                fontSize: '16px',
                top: '-25%',
                left: '0%',
              },
            }}
            type="number"
            id="price"
            label="min price"
            placeholder="from"
            inputProps={{
              style: {
                padding: '6px 6px',
                fontSize: '16px',
              },
              inputMode: 'numeric', 
              pattern: '[0-9]*',
              min: "0",
            }}
            onChange={handleMinPriceChange} />
          <TextField
            sx={{
              width: '112px',
              height: '36px',
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: ' #282828',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#282828',
                transform: 'translate(14px, -5px) scale(0.75)',
              },
              '& .MuiInputLabel-root': {
                color: '#888',
                fontSize: '16px',
                top: '-25%',
                left: '0%',
              },
            }}
            type="number"
            placeholder="to"
            inputProps={{
              style: {
                padding: '6px 6px',
                fontSize: '16px',
              },
              inputMode: 'numeric', 
              pattern: '[0-9]*',
              min: "0",
            }}
            label="max price"
            onChange={handleMaxPriceChange}
          />
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
    </Box>
  );
};
