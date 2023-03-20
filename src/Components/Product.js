import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // push into the basket

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>

            <div className="product_info">

                <p>{title}</p>

                <p className="product_price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>


                <div className="product_rating">
                    {
                        // just trick to show rating
                        Array(rating)
                            .fill()
                            .map((i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="image" className='image' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
