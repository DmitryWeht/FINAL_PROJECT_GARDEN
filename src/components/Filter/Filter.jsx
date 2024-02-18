import { useDispatch, useSelector } from "react-redux";

 import {
     minPriceChange, maxPriceChange, toggleDiscounted, sortChange
   } from "../../store/filterSlice"; 
  
  import classes from "../../components/Filter/Filter.module.css";
  import { useEffect, useState } from "react";
  
  export const Filter = ({content}) => {
  
    const dispatch = useDispatch()
    const showDiscounted = useSelector(state => state.filter.showDiscounted);
    const [isChecked , setIsChecked] = useState(showDiscounted);
    const location = useLocation();

     useEffect(() => {
        setIsChecked(showOnlyDiscounted);
        dispatch(minPriceChange(''));
        dispatch(maxPriceChange(''));
        dispatch(sortChange(''));
    }, [showOnlyDiscounted, location, dispatch]);

    const handleToggleShowOnlyDiscounted = () => {
        
        if(isChecked) {
            setIsChecked(false);
            dispatch(toggleShowOnlyDiscounted());
        } else {
          setIsChecked(true);
          dispatch(toggleShowOnlyDiscounted());
        }
    
    }
    
  
    return (
      <form>
        <div className={classes.filters}>
          <div className={classes.filter_price}>
            <label htmlFor="price" className={classes.price}>
              Price
              <input
                className={classes.filter_inputs}
                type="number"
                id="price"
                step=".1"
                min="0"
                placeholder="from"
                name="from"
                
                content="filter"
                onChange={(e) => dispatch(minPriceChange(e.target.value))}
              />
              <input
                className={classes.filter_inputs}
                type="number"
                placeholder="to"
                name="to"
                
                step=".1"
                min="0"
                content="filter"
              
                onChange={(e) => dispatch(maxPriceChange(e.target.value))}
              />
            </label>
          </div>
          {content !== 'sale' && (
          <div className={classes.checkbox}>
            <p>Discounted items</p>
            <label className={classes.labelForCheckbox}>
              <input
                className={classes.inputForCheckbox}
                type="checkbox"
             
                content="discont"
                // onClick={handleDiscontToggle}
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
              <option value="default">by default</option>
              <option value="priceAsc">Ascending</option>
              <option value="priceDesc">Descending</option>
              
            </select>
          </div>
        </div>
      </form>
    );
  };


  // const { data: productsData } = useGetAllProductsQuery();
  //   // console.log(products);
  //   const { minPrice, maxPrice, toggleDiscounted, sort } = useSelector((state) => state.filter);

  //    const [products, setProducts] = useState(productsData);
  
  //   useEffect(() => {
  //     const filterProducts = products?.filter((product) => {
  //       return (
  //         (!minPrice || product.price >= Number(minPrice)) &&
  //         (!minPrice || product.price <= Number(maxPrice))
  //       );
  //     });
  
  //     const sortedProducts =
  //       sort === "" || sort === "by default"
  //         ? filterProducts
  //         : filterProducts?.toSorted((a, b) =>
  //             sort === "asc" ? a.price - b.price : b.price - a.price
  //           );
  
  //         setProducts(sortedProducts);
  //         }, [minPrice, maxPrice, sort, productsData]);
  
  
  
  //   const dispatch = useDispatch();
  
    
  