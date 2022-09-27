import React from 'react'

export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
    <article className="my-5 flex items-end justify-end">
        <ul>
          <li><span className="font-bold">Invoicer Number: </span>{invoiceNumber}</li>
          <li><span className="font-bold">Invoice Date: </span>{invoiceDate}</li>
          <li><span className="font-bold">Due Date: </span>{dueDate}</li>
        </ul>
      </article>
    </>
  )
}
