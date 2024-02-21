import { useParams } from "react-router-dom";

import { Counter } from "../../components/Counter/Counter";
import { useGetProductByIdQuery } from "../../store/apiSlice";
import classes from "./SingleProduct.module.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: products } = useGetProductByIdQuery(id);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className={classes.card_product}>
            <img
              src={`http://127.0.0.1:3333/${product.image}`}
              alt={product.title}
              className={classes.image_card}
            />
            <div className={classes.card_descriptoin}>
              <h2>{product.title}</h2>
              <div className={classes.prices_box}>
                {product.discont_price === null ? (
                  <p className={classes.price}>${product.price}</p>
                ) : (
                  <>
                    <p className={classes.price}>${product.discont_price}</p>
                    <p className={classes.discont_price}>${product.price}</p>
                  </>
                )}
                {product.discont_price && (
                  <p className={classes.discountPercentage}>
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
              <div className={classes.button_box}>
                <button>Add to cart</button>
              </div>
              <div className={classes.text_box}>
                <p>Description</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className={classes.text_box_hidden}>
          <p>Description</p>
          <p>{products.length > 0 ? products[0].description : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
