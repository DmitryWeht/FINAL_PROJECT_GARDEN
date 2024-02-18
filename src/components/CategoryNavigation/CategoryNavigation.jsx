import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import classes from "./CategoryNavigation.module.css";
const CategoryNavigation = () => {
  const { id } = useParams();

  console.log("Category id:", id);
  const { data, isLoading, isError } = useGetCategoryByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  const category = data && data.category;
  const title = category && category.title;

  return (
    <>
      <hr />
      <div className={classes.category_title}>
        <div className={classes.navigation_container}>
          <Link
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            {" "}
            <button>Main page</button>
          </Link>
          <div className={classes.line}></div>
          <Link
            to="/categories"
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            {" "}
            <button>Categories</button>
          </Link>
          <div className={classes.line}></div>

          <div
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            <button> {title}</button>
          </div>
        </div>
        <p className={classes.title}>{title}</p>
      </div>
    </>
  );
};

export default CategoryNavigation;
