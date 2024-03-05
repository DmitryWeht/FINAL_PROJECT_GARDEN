import classes from "./CustomButton.module.css";

const CustomButton = ({ onClick, buttonClasses, buttonText }) => {
  // Обработчик клика по кнопке
  const handleClick = (event) => {
    event.preventDefault(); // Предотвращение стандартного поведения браузера
    onClick(); // Вызов функции onClick, переданной через пропс
  };

  return (
    <div>
      <button
        className={`${classes.custom_button} 
         ${buttonClasses}`}
        onClick={handleClick}
      >
        {/* Отображаем текст кнопки, переданный через пропс */}
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;
