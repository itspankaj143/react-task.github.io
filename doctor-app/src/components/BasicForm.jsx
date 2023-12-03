import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allArray, setAllArray] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const newArray = {
      id: new Date().getTime().toString(),
      email,
      password,
    };
    setAllArray([...allArray, newArray]);
    // console.log(allArray);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h1>BasicForm</h1>
      <form action="" onSubmit={handleForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LogIn</button>
      </form>
      {allArray.map((curval) => {
        return (
          <div key={curval.id}>
            <h1>{curval.email}</h1>,<h1>{curval.password}</h1>
          </div>
        );
      })}
    </>
  );
};

export default BasicForm;
