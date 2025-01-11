import React, { useState } from "react";

function App() {
  const [savedName, setSavedName] = useState("");
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setSavedName(event.target.value);
  }

  function handleSubmit() {
    setName(savedName);

    //event.preventDefault(); when you use <form on Submit= {handleClick}> to prevent it from refreshing
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={savedName}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
