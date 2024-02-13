import { Categories } from "../../components/Categories/Categories";
import Discount from "../../components/Discount/Discount";
import { Form } from "../../components/Form/Form";
import Sale from "../../components/Sale/Sale";

export const MainPage = () => {
  return (
    <div>
      <Discount />
      <Categories />
      <Form />
      <Sale />
    </div>
  );
};
