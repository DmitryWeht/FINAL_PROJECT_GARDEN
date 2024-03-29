import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  useGetDiscountMutation,
  useSendOrderMutation,
} from "../../store/apiSlice";
import { clearCart } from "../../store/cartSlice";
import classes from "./UserDataForm.module.css";

export const UserDataForm = ({
  inputStyles,
  formStyles,
  buttonStyles,
  buttonText = "Get a discount",
  successText = "Request Submitted",
  requestType = "getDiscount",
  handleOpenModal,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submittedSuccessful, setSubmittedSuccessful] = useState(false);

  const [getDiscount] = useGetDiscountMutation();
  const [sendOrder] = useSendOrderMutation();

  const handlePostUserData = (data) => {
    const userData = {
      ...data,
      id: uuidv4(),
    };

    if (requestType === "getDiscount") {
      getDiscount(userData);
      handleOpenModal();
    } else if (requestType === "sendOrder") {
      sendOrder(userData);
      dispatch(clearCart());
      handleOpenModal();
    }
    setSubmittedSuccessful(true);
    reset();
  };
  // Функция для сброса состояния успешной отправки при изменении ввода
  const handleInputChange = () => {
    setSubmittedSuccessful(false);
  };

  return (
    <div className={`${classes.dataForm} ${formStyles}`}>
      <form onSubmit={handleSubmit(handlePostUserData)}>
        <input
          onFocus={handleInputChange}
          type="text"
          placeholder="Name"
          className={`${classes.form_input} ${inputStyles}`}
          {...register("name", {
            required: true,
            minLength: {
              value: 4,
              message: "The name must contain more than 3 letters",
            },
          })}
        />
        <p className={classes.name}>{`${errors.name?.message || ""}`}</p>

        <input
          onFocus={handleInputChange}
          type="tel"
          placeholder="Phone number"
          className={`${classes.form_input} ${inputStyles}`}
          {...register("phone", {
            required: true,
            pattern: {
              value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
              message: "Please enter correct phone number",
            },
          })}
        />
        <p className={classes.phone}>{`${errors.phone?.message || ""}`}</p>
        <input
          onFocus={handleInputChange}
          type="email"
          placeholder="Email"
          className={`${classes.form_input} ${inputStyles}`}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter correct email",
            },
          })}
        />

        <p className={classes.email}> {`${errors.email?.message || ""}`}</p>

        <input
          type="submit"
          value={submittedSuccessful ? successText : buttonText}
          className={`${classes.submit_button} ${
            submittedSuccessful ? classes.successful_button : ""
          } ${buttonStyles}`}
        />
      </form>
    </div>
  );
};
