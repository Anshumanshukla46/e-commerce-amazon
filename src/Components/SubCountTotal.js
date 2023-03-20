import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./SubCountTotal.css"

function SubCountTotal() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='SubCountTotal'>
            {/* price */}

            <CurrencyFormat
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}


                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>MISSING {`${value}`}</strong> </p>


                        <small className='subtotal_gift'>

                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubCountTotal
