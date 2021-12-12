
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../App';
import './Cart.style.scss';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart }) => {
    return(
        <div className="cart-wrapper">
            <div className="cart-title">Mon panier</div>
            {cartItems.length === 0 ? <p>Vous n'avez pas encore ajouté de livre</p> : null}
            {cartItems.map(item =>(
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default Cart;