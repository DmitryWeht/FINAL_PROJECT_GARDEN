import { useState } from "react";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { DiscountForm } from "../../components/DiscountForm/DiscountForm";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import SubmitModal from "../../components/SubmitModal/SubmitModal";

export const MainPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <SaleBanner />
      <CategoriesSection />
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
