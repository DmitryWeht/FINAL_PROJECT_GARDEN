import classes from './CartItem.module.css';
import { useGetProductByIdQuery } from "../../store/apiSlice";
import {  addToCart} from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';

    export const CartItem = (props) => {
        const { id, image, title, price, discont_price, amount } = props;
        const dispatch = useDispatch();
        const { data: products } = useGetProductByIdQuery(id);

        return (
            <li className={classes.cart_item}>
                {/* <IoMdClose
                    className={classes.del_btn}
                    onClick={() => dispatch(removeProductFromCartById(id))}
                /> */}
    
                {/* <NavLink to={`/products/${id}`} className={classes.item_wrapper}>
                    <img src={`${base_url}${image}`} alt={title} />
                </NavLink> */}
    
                <div className={classes.item_content}>
                    <h2 className={classes.title}>{title}</h2>
    
                     <div className={classes.counter}>
                        {/* <AiOutlineMinus
                            className={styles.count_btn}
                            onClick={() => dispatch(decrementProductInCart(id))}
                        />  */}
                        <p>{amount}</p>
                        <AiOutlinePlus
                            className={classes.count_btn}
                            onClick={() => dispatch(addToCart(props))}
                        />
                    </div>
                </div>
    
                
                {/* /> */}
            </li>
        );
    };

