import React from 'react'
import {v4 as uuidv4} from "uuid"

export default function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList}) {

    const handleSubmit =(e) => {
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            description: description,
            quantity: quantity,
            price: price,
            amount: amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList(...list, newItems)
    }

    const calculatorAmount = (amount)  => {
        setAmount(quantity * price)
    }

  return (
    <>
    {/* <form onSubmit={handleSubmit}> */}
        
      <label htmlFor="description">Item Description</label>
              <input type="text" name="description" id="description" placeholder="Item Description" autoComplete="off" value={description} onChange={(e) => setDescription(e.target.value)}/>  
    


      <label htmlFor="quantity">Quantity</label>
              <input type="text" name="quantity" id="quantity" placeholder="Quantity" autoComplete="off" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>  
    


      <label htmlFor="price">Price</label>
              <input type="text" name="price" id="price" placeholder="Price" autoComplete="off" value={price} onChange={(e) => setPrice(e.target.value)}/>  
    


      <label htmlFor="amount">Amount</label>
              <p>{calculatorAmount(amount)}</p>

              <button type="submit" onSubmit={handleSubmit} className=" mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Add Item</button>
    {/* </form> */}
    </>
  )
}
