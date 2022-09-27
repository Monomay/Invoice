import React from 'react'

export default function Footer({name, email, address, website, phone, bankAccount, bankName}) {
  return (
    <>
    <footer className="footer border-t-2 border-gray-400">
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold"> Your Name:</span> {name}</li>
          <li><span className="font-bold">Your email: </span>{email}</li>
          <li><span className="font-bold">Phone Number: </span>{phone}</li>
          <li><span className="font-bold">Bank: </span>{bankName}</li>
          <li><span className="font-bold">Account Holder: </span>{name}</li>
          <li><span className="font-bold">Account Number: </span>{bankAccount}</li>
          <li><span className="font-bold"> Website: </span><a href={website} target="_blank" rel='noopenner noreferrer'>{website}</a></li>
        </ul>
      </footer>
    </>
  )
}

