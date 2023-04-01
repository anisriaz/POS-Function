import React, { useState } from 'react';
import Data from './Data.json';
import './Dstyle.css';

function ProductTable() {
  const [data, setData] = useState(Data);
  const [select, setSelectedValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    const selectedItem = data.find((item) => item.id === parseInt(event.target.value));
    setSelectedItem(selectedItem);
    setQuantity(1);
  };
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddClick = () => {
    const existingProductIndex = addedProducts.findIndex(
      (product) => product.id === selectedItem.id
    );
    const newQuantity = quantity;
    const newTotal = selectedItem.Price * newQuantity;

    const updatedProducts = existingProductIndex >= 0
      ? [...addedProducts].map((product, index) => {
        return index === existingProductIndex
          ? {
            ...product,
            quantity: newQuantity,
            total: newTotal,
          }
          : product;
      })
      : [...addedProducts, {
        id: selectedItem.id,
        title: selectedItem.title,
        quantity: quantity,
        price: selectedItem.Price,
        total: newTotal,
      }];

    setAddedProducts(updatedProducts);
    setSelectedValue("");
  }
  const handleClearClick = () => {
    setSelectedValue("");
    setSelectedItem(null);
    setQuantity(1);
    setAddedProducts([]);
  }
  const handleValues = (event) => {
    event.preventDefault();
    const newProduct = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.Price,
      quantity: quantity,
      total: selectedItem.Price * quantity
    };
    setAddedProducts([...addedProducts, newProduct]);
    setSelectedValue("");
  };
  const removeProducts = (id) => {
    const newProducts = addedProducts.filter((product) => product.id !== id);
    setAddedProducts(newProducts);
  };

  return (
    <div className='row-2'>
      <div className='tb-l'>
        <div className='add-member'>
          <form className='add-form' onSubmit={handleValues}>
            <select className='value' value={select} onChange={handleSelectChange}>
              <option value="">Select</option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select></form>
          {selectedItem && (
            <>
              <input autoComplete='off' type="text" className='unit' name="Unit" value={selectedItem.title} readOnly />
              <input autoComplete='off' type="number" className='unit' name="Quantity" value={quantity} onChange={handleQuantityChange} />
              <input autoComplete='off' type="text" className='RS' name="Price" value={selectedItem.Price * quantity} readOnly />
            </>
          )}
          {!selectedItem && (
            <>
              <input type="text" className='unit' name="Unit" value="" />
              <input type="text" className='unit' name="Quantity" value="" />
              <input type="text" className='RS' name="Price" value="" />
            </>
          )}
          <button className='bt-1' type='button' onClick={handleAddClick}>Add</button>
          <button className='bt' onClick={handleClearClick}>Clear</button>
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
              {addedProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.total}</td>
                  <td>
                    <button className='bt' onClick={() => removeProducts(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-right font-weight-bold">Total Amount</td>
                <td colSpan="2" className="font-weight-bold">{addedProducts.reduce((acc, product) => acc + product.total, 0)}</td>
              </tr>
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
        Coustmer id: <input type="number" name="id" value={User.id} onChange={handleChange} />
        Coustmer Name: <input type="text" name="coustmer_name" value={User.coustmer_name} onChange={handleChange} />
        Mobile: <input type="number" name="Mobile" value={User.Mobile} onChange={handleChange} />

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
};

export default ProductTable;