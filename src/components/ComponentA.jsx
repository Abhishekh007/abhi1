import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../redux/formSlice";
export default function ComponentA() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        role: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveFormData(formData));
        alert("Form data saved to Redux Store!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            role: ""
        });
    };
    return (
        <div className="form-card">
            <h2>Component A - User Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Enter Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    Save Data
                </button>
            </form>
        </div>
    );
}