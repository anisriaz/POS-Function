import React, { useState } from 'react';
import "./NavStyle.css"
function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm)
  }

  return (
    <div className='containers'>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
}

export default App;
