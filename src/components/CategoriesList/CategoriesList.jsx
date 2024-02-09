import { useGetAllCategoriesQuery } from "../../store/apiSlice";

export const CategoriesList = () => {
  const { data } = useGetAllCategoriesQuery();
  console.log(data);

  return <div></div>;
};
