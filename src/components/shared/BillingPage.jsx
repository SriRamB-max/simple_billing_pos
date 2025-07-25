import { useRef, useContext } from 'react';
import { UserContext } from './UserContext';
import './BillingPage.css'


const BillingPage = () => {
  const printRef = useRef();
  const { products } = useContext(UserContext);

  const totalAmount = products.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className='container-box'>
        <div ref={printRef} className="container-bill rounded-3 mt-5">
          <h2>Billing Invoice</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th className='ps-5'>Qty</th>
                <th className='ps-5'>Unit Price</th>
                <th className='ps-5'>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.product}</td>
                  <td className='ps-5'>{item.quantity}</td>
                  <td className='ps-5'>₹{item.price}</td>
                  <td className='ps-5'>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className='ps-2'>Total Amount: ₹{totalAmount}</h3>
          <hr />
        </div>
      </div>
      <button onClick={handlePrint} className="print-button btn btn-md bg-danger text-white mt-5">
        Print Bill
      </button>
    </>
  );
};

export default BillingPage;
