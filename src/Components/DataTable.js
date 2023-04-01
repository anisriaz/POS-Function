import React from 'react';

function DataTable({ data }) {
  return (
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
          <tr key={item.id} >
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.Price}</td>
            <td>{item.Quantity * item.Price}</td>
            <button className='bt'>Delete</button>
          </tr>
        ))}
        <div className='Amount'> <h4>Total</h4></div>
      </tbody>
    </table>
  );
}

function Table() {
  // your state variables and handlers here

  const filteredData = Data.filter((current) => current.title.includes(select));

  return (
    <div className='row-2'>
      <div className='tb-l'>
        {/* your select and input fields here */}
      </div>
      <div className='tb-m'>
        <DataTable data={filteredData} />
      </div>
      <div className='tab-3'>
        {/* your table and buttons here */}
      </div>
    </div>
  );
}

export default Table;
