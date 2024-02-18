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

  const [submittedSuccessful, setSubmittedSuccessful] = useState(false);

  const [getDiscount] = useGetDiscountMutation();

  const handlePostUserDataToGetDiscount = (data) => {
    const userData = {
      ...data,
      id: uuidv4(),
    };
    getDiscount(userData);

    setSubmittedSuccessful(true);
    console.log(userData);
    reset();
  };

  const handleInputChange = () => {
    setSubmittedSuccessful(false);
  };

  return (
    <div className={classes.dataForm}>
      <form onSubmit={handleSubmit(handlePostUserDataToGetDiscount)}>
        <input
          onFocus={handleInputChange}
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
          onFocus={handleInputChange}
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
          onFocus={handleInputChange}
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
          value={submittedSuccessful ? "Request Submitted" : "Get a discount"}
          className={`${classes.submit_button} ${
            submittedSuccessful ? classes.successful_button : ""
          }`}
          disabled={submittedSuccessful}
        />
      </form>

      <p className={classes.message}>
        {errors.email?.message && `${errors.email.message}`}
        <br />
        {errors.name?.message && `${errors.name.message}`}
        <br />
        {errors.phone?.message && `${errors.phone.message}`}
      </p>
    </div>
  );
};
