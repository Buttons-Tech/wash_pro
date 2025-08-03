import { useState } from "react"

export default function Shipment(params) {
    
    const [quantity, setQuantity] = useState(0);
    const [item, setItem] = useState("Sneakers");
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    const handleQuantityChange = (e)=>{
        setQuantity(e.target.value)
    }

    const handleItemChange = (e)=>{
        setItem(e.target.value)
    }
    const handleCommentChange = (e)=>{
        setComment(e.target.value)
    }
    const handlePaymentChange = (e)=>{
        setPayment(e.target.value)
    }
    const handleShippingChange = (e)=>{
        setShipping(e.target.value)
    }
    return(
        <>
        <div>
            SHIPMENT
        </div>
        {/* string */}
        <input type="text" 
        value={item}
        onChange={(e)=>handleItemChange(e)}

        /><br />
        {/* number */}
        <input type="number"
        value={quantity}
        onChange={(e)=>handleQuantityChange(e)}
        /> <br />

        {/* comment */}
        <textarea type="text" 
        value={comment}
        onChange={(e)=>handleCommentChange(e)}
        placeholder="Enter delivery details"
        /> <br />

        {/* Drop down MENU  (SELECT-options)*/}
        <label htmlFor="">Payment</label>
        <select name="" id="" value={payment} onChange={(e)=>handlePaymentChange(e)}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select><br />

        {/* Radio Buttons */}
         <label htmlFor="">
           <input type="radio" 
           value="pick up"
           checked={shipping === "pickup"}
           onChange={handleShippingChange}
           />
            
            Pickup</label>
         <label htmlFor="">
           <input type="radio" 
           value="delivery"
           checked={shipping === "delivery"}
           onChange={handleShippingChange}
           />
            
            Delivery</label>

            <p>Quantity:  <b>{quantity}</b> </p>
            <p>Item:  <b>{item}</b> </p>
            <p>Comment:  <b>{comment}</b> </p>
            <p>Payment:  <b>{payment}</b> </p>
            <p>Shipping:  <b>{shipping}</b> </p>
            <button className="mobile-button1" title="Save"/>

        </>
    )
}