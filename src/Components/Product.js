import React from 'react'
import "./Product.css"

function Product({ id, title, price, rating, image }) {
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
            <img src={image} alt="image" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
