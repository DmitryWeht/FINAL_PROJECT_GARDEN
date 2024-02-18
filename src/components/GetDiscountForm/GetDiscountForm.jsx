import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useGetDiscountMutation } from "../../store/apiSlice";
import classes from "./GetDiscountForm.module.css";

export const GetDiscountForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [getDiscount] = useGetDiscountMutation();

  const [strimSuccessful, setStrimSuccessful] = useState();

  const handlePostUserDataToGetDiscount = (data) => {
    const userData = {
      ...data,
      id: uuidv4(),
    };
    getDiscount(userData);

    if (true) setStrimSuccessful(true);

    console.log(userData);

    reset();
  };

  const cleanMessage = () => {
    setStrimSuccessful(false);
  };

  console.log("strim", strimSuccessful);
  return (
    <div className={classes.dataForm}>
      <form onSubmit={handleSubmit(handlePostUserDataToGetDiscount)}>
        <input
          onFocus={cleanMessage}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            minLength: {
              value: 4,
              message: "The name must be longer than three letters",
            },
          })}
        />
        <input
          onFocus={cleanMessage}
          type="tel"
          placeholder="Phone number"
          {...register("phone", {
            required: true,
            pattern: {
              value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
              message: "Please enter a correct phone number",
            },
          })}
        />
        <input
          onFocus={cleanMessage}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a correct e-mail",
            },
          })}
        />
        <input
          type="submit"
          value="Get a discount"
          id={classes.submit_button}
        />
      </form>

      <p
        className={classes.message}
        style={{ color: strimSuccessful ? "white" : "red" }}
      >
        {errors.email?.message && `${errors.email.message}`}
        <br></br>
        {errors.name?.message && `${errors.name.message}`}
        <br></br>
        {errors.phone?.message && `${errors.phone.message}`}
        {strimSuccessful
          ? "Thank you, the data has been sent. Expect an email with a discount."
          : ""}
      </p>
    </div>
  );
};
