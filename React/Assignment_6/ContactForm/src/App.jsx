import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, { title, email, phone }]);
    setTitle("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="app">
      {/* FORM */}
      <form className="contact-form" onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Enter name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button className="btn">Add Contact</button>
      </form>

      {/* CONTACT TABLE */}
      <div className="contact-list">
        <div className="contact-head">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>

        {allUsers.map((elem, idx) => (
          <div className="contact-card" key={idx}>
            <span>{elem.title}</span>
            <span>{elem.email}</span>
            <span>{elem.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
