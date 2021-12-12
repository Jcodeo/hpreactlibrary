import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./Book.styles";

type Props = {
    book: CartItemType;
}

const Book: React.FC<Props> = ({book}) => (
    <Wrapper>
        <div className="book-item">        
            <div className="book-infos">
                <div className="book-cover"><img src={ book.cover } alt={ book.title } /></div>
                <div className="book-title">{ book.title }</div> 
                <div className="book-desc">{ book.synospis }</div> 
                <div className="book-bottom">
                    <div className="book-price">{ book.price }€</div> 
                    <a><span className="added">Ajouter</span></a>
                </div>
            </div> 
        </div>
    </Wrapper>
);
export default Book;