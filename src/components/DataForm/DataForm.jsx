import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useAddNewUserMutation } from "../../store/apiSlice";
import classes from "./DataForm.module.css";

export const DataForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [addNewUser] = useAddNewUserMutation();

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: uuidv4(),
    };
    addNewUser(handleAddUser);
    reset();
    console.log(newUser);
  };

  return (
    <div className={classes.dataForm}>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <input
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
        style={{ color: isSubmitSuccessful ? "white" : "red" }}
      >
        {errors.email?.message && `${errors.email.message}`}
        <br></br>
        {errors.name?.message && `${errors.name.message}`}
        <br></br>
        {errors.phone?.message && `${errors.phone.message}`}
        {isSubmitSuccessful
          ? "Thank you, the data has been sent. Expect an email with a discount."
          : ""}
      </p>
    </div>
  );
};
