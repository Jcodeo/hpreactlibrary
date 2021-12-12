import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import './CartItem.scss';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart}) => (
    <div className="cart-list">
        <div className="item-title">{item.title}</div>
        <div className="item-price">{item.price}</div>
    </div>
);

export default CartItem;