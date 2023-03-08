import React, { useState } from 'react';
import Data from "./Data.json"
import "./Dstyle.css"

function Table() {
  const [data, setData] = useState(Data);
  const [select, setSelect] = useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
  }
  let [User, setUser] = useState({
    Unit: "",
    title: "",
    price: "",
  });

  const filteredData = data.filter((current) => current.title.includes(select));

  return (
    <div className='row-2'>
      <div className='tb-l'>
        <div className='add-member'>
          <select className='value' value={select} onChange={handleChange}>
            <option value="Select"></option>
            <option value="Iphone">1</option>
            <option value="Samsung">2</option>
            <option value="Realme">3</option>
            <option value="Oppo">4</option>
            <option value="Redme">5</option>
          </select>
          <input type="text" name="" value={User.Unit} onChange={handleChange} />
        
          <input type="title" name="Unit" value={User.title} onChange={handleChange} />
          <input type="" name="price" value={User.price} onChange={handleChange} />
          <button className='bt-1'>Add</button>
          <button className='bt'>Clear</button>
        </div>
        <div className='tab-3'>
          <table className='tab-2'>
            <thead>
              <tr>
                <th className='Id'>id</th>
                <th className='title'>Title</th>
                <th className='quantity'>Quantity </th>
                <th className='price'>Price</th>
                <th className='total'>Total</th>
                <th className='Action'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Price}</td>
                  <td>{item.Quantity * item.Price}</td>

                </tr>
              ))}
              <div className='Amount'> <h4>Total</h4></div>
            </tbody>
          </table>
        </div>
      </div>
      <App />
    </div>
  );
}

function App() {
  let [User, setUser] = useState({
    id: "",
    coustmer_name: "",
    Mobile: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = ({ target: { name, value } }) => setUser({ ...User, [name]: value });

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        Coustmer id: <input type="number" name="id" value={User.number} onChange={handleChange} />
        Coustmer Name: <input type="text" name="coustmer_name" value={User.coustmer_name} onChange={handleChange} />
        Mobile: <input type="number" name="Mobile" value={User.number} onChange={handleChange} />
        <input type="Submit" value="New Coustmer" />
      </form>
      <div className='bottom'>
          <button className='bt-3'>Collect Cash</button>
          <button className='bt-4'>Print invoice</button>
          <button className='bt-5'>Cancle Order</button>
          <button className='bt-6'>Hold Order</button>
         </div>
    </div>
  );
}



export default Table
