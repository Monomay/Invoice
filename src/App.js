import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("Monomay Mukherjee")
  const [address, setAddress] = useState("Kolkata")
  const [email, setEmail] = useState("monomoy230@gmail.com")
  const [phone, setPhone] = useState("8967996103")
  const [bankName, setBankName] = useState("SVBF")
  const [bankAccount, setBankAccount] = useState("1234 567 896")
  const [website, setWebsite] = useState("https://mono.co.in")
  const [clientName, setClientName] = useState("Altech Greens ")
  const [clientAddress, setClientAddress] = useState("Mumbai")
  const [invoiceNumber, setInvoiceNumber] = useState("1001")
  const [invoiceDate, setInvoiceDate] = useState("26-09-2022")
  const [dueDate, setDueDate] = useState("26-10-2022")
  const [notes, setNotes] = useState("This is pay")
  const [description, setDescription] = useState("Some quantity")
  const [quantity, setQuantity] = useState("Quantity")
  const [price, setPrice] = useState("Price")
  const [amount, setAmount] = useState("")
  const [list, setList] = ([])

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table description={description} quantity={quantity} price={price} amount={amount} />
          <Notes notes={notes} />
          <Footer name={name} address={address} email={email} website={website} phone={phone} bankAccount={bankAccount} bankName={bankName} />
          <button onClick={() => setShowInvoice(false)} className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
        </div> : (
          <>
            {/* name, address, email, phone, bank name, account number, website, client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name</label>
              <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
              <label htmlFor="address">Enter your address</label>
              <input type="address" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)}/>
              <label htmlFor="email">Enter your email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="website">Enter your website</label>
              <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)}/>
              <label htmlFor="phone">Enter your phone number</label>
              <input type="text" name="phone" id="phone" placeholder="Enter your phone" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              <label htmlFor="bankName">Enter your bank name</label>
              <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
              <label htmlFor="bankAccount">Enter your bank account number</label>
              <input type="text" name="bankAccount" id="bankAccount" placeholder="Enter your bank account number" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}/>
              <label htmlFor="clientName">Enter your client name</label>
              <input type="text" name="clientName" id="clientName" placeholder="Enter your client name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
              <label htmlFor="clientAddress">Enter your client address</label>
              <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter your client address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}/>
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter your invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
              <label htmlFor="invoiceDate">Invoice Date</label>
              <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter your invoice date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>

              {/* <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/> */}

              <TableForm description={description}
              setDescription={setDescription}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              ist={list}
              setList={setList}
              />

              <label htmlFor="phone">Addtional Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Addtional Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
              <button onClick={() => setShowInvoice(true)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Previous Invoice</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
