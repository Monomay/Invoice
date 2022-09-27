import React from 'react'

export default function Notes(props) {
  return (
  
    <>
    <section className=" mt-10 mb-5">
        {/* {textarea} */}
        <p>{props.notes}</p>
    </section>
    </>
  )
}

