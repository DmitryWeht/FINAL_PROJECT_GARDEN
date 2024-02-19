// import { useDispatch, useSelector } from "react-redux";

//  import {
//      minPriceChange, maxPriceChange, toggleDisconted, sortChange
//    } from "../../store/filterSlice";

//   import classes from "../../components/Filter/Filter.module.css";
//   import { useEffect, useState } from "react";

//   export const Filter = ({content}) => {

//     const dispatch = useDispatch()
//     const showDiscounted = useSelector(state => state.filter.showDiscounted);
//     const [isChecked , setIsChecked] = useState(showDiscounted);
//     const location = useLocation();

//      useEffect(() => {
//         setIsChecked(showDiscounted);
//         dispatch(minPriceChange(''));
//         dispatch(maxPriceChange(''));
//         dispatch(sortChange(''));
//     }, [showDiscounted, location, dispatch]);

//     const handleToggleShowDiscounted = () => {

//         if(isChecked) {
//             setIsChecked(false);
//             dispatch(toggleShowDiscounted());
//         } else {
//           setIsChecked(true);
//           dispatch(toggleShowDiscounted());
//         }

//     }

//     return (
//       <form>
//         <div className={classes.filters}>
//           <div className={classes.filter_price}>
//             <label htmlFor="price" className={classes.price}>
//               Price
//               <input
//                 className={classes.filter_inputs}
//                 type="number"
//                 id="price"
//                 step=".1"
//                 min="0"
//                 placeholder="from"
//                 name="from"

//                 content="filter"
//                 onChange={(e) => dispatch(minPriceChange(e.target.value))}
//               />
//               <input
//                 className={classes.filter_inputs}
//                 type="number"
//                 placeholder="to"
//                 name="to"

//                 step=".1"
//                 min="0"
//                 content="filter"

//                 onChange={(e) => dispatch(maxPriceChange(e.target.value))}
//               />
//             </label>
//           </div>
//           {content !== 'sale' && (
//           <div className={classes.checkbox}>
//             <p>Discounted items</p>
//             <label className={classes.labelForCheckbox}>
//               <input
//                 className={classes.inputForCheckbox}
//                 type="checkbox"

//                 content="discont"
//                  onClick={handleToggleShowDiscounted}
//               />
//               <span></span>
//             </label>
//           </div>
//   )}
//           <div className={classes.sorted}>
//             <label htmlFor="sort" className={classes.sort_label}>
//               Sorted
//             </label>
//             <select
//               className={classes.sort_select}
//               id="sort"

//               onChange={(e) => dispatch(sortChange(e.target.value))}
//             >
//               <option value="default">by default</option>
//               <option value="priceAsc">Ascending</option>
//               <option value="priceDesc">Descending</option>

//             </select>
//           </div>
//         </div>
//       </form>
//     );
//   };

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

  return (
    <form>
      <div className={classes.filters}>
        <div className={classes.filter_price}>
          <label htmlFor="price">
            Price
            <input
              className={classes.filter_inputs}
              type="number"
              step=".1"
              min="0"
              id="price"
              placeholder="from"
              onChange={(e) => dispatch(minPriceChange(e.target.value))}
            />
            <input
              className={classes.filter_inputs}
              type="number"
              placeholder="to"
              step=".1"
              min="0"
              onChange={(e) => dispatch(maxPriceChange(e.target.value))}
            />
          </label>
        </div>

        {content !== "sale" && (
          <div className={classes.checkbox}>
            <p>Discounted items</p>
            <label className={classes.labelForCheckbox}>
              <input
                className={classes.inputForCheckbox}
                type="checkbox"
                // checked={toggleDiscounted}
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
