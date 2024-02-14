import { NavLink, useParams } from "react-router-dom";
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
        <nav className={classes.navigation_container}>
          <div>
            {" "}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              {" "}
              Main page
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              to="/categories"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              {" "}
              Categories
            </NavLink>
          </div>

          <div>
            <NavLink
              to={`/categories/${id}`}
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              {title}
            </NavLink>
          </div>
        </nav>
        <p className={classes.title}>{title}</p>
      </div>
    </>
  );
};

export default CategoryNavigation;
