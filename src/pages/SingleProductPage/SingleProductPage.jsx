// import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
// import SingleProduct from "../../components/SingleProduct/SingleProduct";

// export const SingleProductPage = () => {
//   return (
//     <div className="container">
//       <ButtonNavigation />
//       <SingleProduct />
//     </div>
//   );
// };
import React, { useState } from "react";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import ImageModal from "../../components/ImageModal/ImageModal";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

export const SingleProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container">
      <ButtonNavigation />
      <SingleProduct handleOpenModal={handleOpenModal} />
      {selectedProduct && (
        <ImageModal
          open={openModal}
          handleClose={handleCloseModal}
          imageUrl={`http://127.0.0.1:3333/${selectedProduct.image}`}
        />
      )}
    </div>
  );
};
