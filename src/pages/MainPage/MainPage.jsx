import { useState } from "react";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { DiscountForm } from "../../components/DiscountForm/DiscountForm";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import SubmitModal from "../../components/SubmitModal/SubmitModal";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";

export const MainPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isLoading } = useGetAllCategoriesQuery();
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <SaleBanner />
      <CategoriesSection isLoading={isLoading} />
      <DiscountForm handleOpenModal={handleOpenModal} />
      <Sale />
      <SubmitModal
        content="form"
        handleCloseModal={handleCloseModal}
        open={openModal}
      />
    </div>
  );
};
