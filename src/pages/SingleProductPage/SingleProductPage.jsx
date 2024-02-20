import { useParams } from "react-router-dom";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Counter } from "../../components/Counter/Counter";
import { useGetProductByIdQuery } from "../../store/apiSlice";
import styles from "./SingleProductPage.module.css";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { data: products } = useGetProductByIdQuery(id);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }
  const productTitle = products.length > 0 ? products[0].title : "";

  return (
    <div>
      <div className="container">
        <ButtonNavigation />
        {products.map((product) => (
          <div key={product.id} className={styles.card_product}>
            <img
              src={`http://127.0.0.1:3333/${product.image}`}
              alt={product.title}
              className={styles.image_card}
            />
            <div className={styles.card_descriptoin}>
              <h2>{product.title}</h2>
              <div className={styles.prices_box}>
                {product.discont_price === null ? (
                  <p className={styles.price}>${product.price}</p>
                ) : (
                  <>
                    <p className={styles.price}>${product.discont_price}</p>
                    <p className={styles.discont_price}>${product.price}</p>
                  </>
                )}
                {product.discont_price && (
                  <p className={styles.discountPercentage}>
                    -
                    {Math.round(
                      ((product.price - product.discont_price) /
                        product.price) *
                        100
                    )}
                    %
                  </p>
                )}
              </div>
              <Counter />
              <div className={styles.button_box}>
                <button>Add to cart</button>
              </div>
              <div className={styles.text_box}>
                <p>Description</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.text_box_hidden}>
          <p>Description</p>
          <p>{products.length > 0 ? products[0].description : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
