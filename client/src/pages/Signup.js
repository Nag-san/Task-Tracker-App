import React, { useState, useEffect, useContext } from "react";
import API from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", form);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
        />
        <button type="submit"> Sign Up </button>
      </form>
      <p>
        {" "}
        Already have an account? <a href="/"> Login </a>
      </p>
    </div>
  );
}

export default Signup;
