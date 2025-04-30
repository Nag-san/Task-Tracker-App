import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";


function Login() {
    const [form, setForm] = useState({ email: '', password: ' '});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post('/auth/login', form);
            login(res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login Failed');
        }
    };
    return (
    <div>
        <h2> Login Page </h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required />

            <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required />

            <button type="Submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup"></a></p>
    </div>
    )
}

export default Login;