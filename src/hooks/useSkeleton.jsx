import { useEffect, useState } from "react";

const useSkeleton = (delay) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  // Эффект, который устанавливает задержку перед скрытием скелетонной заглушки
  useEffect(() => {
    // Установка таймера для скрытия скелетонной заглушки после заданной задержки
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, delay);
    // Очистка таймера при размонтировании компонента или изменении задержки
    return () => clearTimeout(timer);
  }, [delay]); // Зависимость от изменения задержки

  return showSkeleton;
};

export default useSkeleton;
