import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styles from "./DataForm.module.css";

export const DataForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const addUser = async (user) => {
    try {
      const response = await fetch(`http://127.0.0.1:3333/sale/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Ошибка при отправке пользователя");
      }
      const userData = await response.json();
      console.log(userData);
      return userData;
    } catch (error) {
      console.error("Oшибка:", error);
    }
  };

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: uuidv4(),
    };
    addUser(handleAddUser);
    console.log(newUser);
    reset();
  };

  return (
    <div className={styles.dataForm}>
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
          type="emeil"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a correct e-mail",
            },
          })}
        />
        <input type="submit" value="Get a discount" id={styles.submit_button} />
      </form>

      <p
        className={styles.message}
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
