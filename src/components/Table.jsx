import React from 'react'

export default function Table({description, quantity, price, amount}) {
  return (
    <>
    <table width="100%">
      <thead>
       <tr className="bg-gray-300">
        <td className="font-bold">Description</td>
        <td className="font-bold">Quantity</td>
        <td className="font-bold">Price</td>
        <td className="font-bold">Amount</td>
       </tr>
      </thead>

      <tbody>
        <tr>
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{amount}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

