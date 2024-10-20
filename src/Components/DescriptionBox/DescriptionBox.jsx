import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Pre-Order Starts
Online : around noon (12 p.m.) on October 18th (Fri) (JST)
In-Store : opening time on October 19th (Sat)
 

Estimated Arrival Date: January - February 2025

* Schedule may change.
* Quantities are limited for the pre-order.
* The end of the date of the pre-order is not settled yet.

* All products except headdress and ribbon clips are available in Regular and Plus sizes.
Please check the size on each product page before placing an order. You cannot change size after placing a pre-order.
            </p>
            <p>               
♦ IMPORTANT NOTES ♦
* Please make payment in full when you place an order.
* Please choose a payment method from a list below if you are an international customer.
 [Acceptable method of payment] PayPal / Credit Card / China UnionPay / Alipay
* If you don't complete payment, your order will be cancelled automatically.
* If there are malicious repeated cancellation on your order history, we may have to decline your order.
* We will ship your order when all of your ordered items are ready.
* Please note that the details and fabrics might be changed without any notifications.
* Please order this series and items not in this series SEPARATELY.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox