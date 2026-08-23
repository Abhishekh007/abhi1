import React, { useState } from "react";
import "./ConditionalForm.css";
export default function ConditionalForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ""
        });
        setSuccess(false);
    };
    const validateForm = () => {
    const newErrors = {};
        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First name is required";
        } else if (formData.firstName.length < 3) {
            newErrors.firstName =
                "First name must contain at least 3 characters";
        }
       if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last name is required";
       }
      if (formData.email.trim() === "") {
           newErrors.email = "Email is required";
        } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
       ) {
            newErrors.email = "Enter a valid email";
       }
       if (formData.mobile.trim() === "") {
           newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile =
                "Mobile number must contain exactly 10 digits";
        }
     if (formData.password === "") {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "Password must contain at least 6 characters";
        }
        if (formData.confirmPassword === "") {
            newErrors.confirmPassword =
                "Confirm password is required";
        } else if (
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }
       if (formData.dob === "") {
            newErrors.dob = "Date of birth is required";
        }
        if (formData.gender === "") {
            newErrors.gender = "Please select gender";
        }
       if (formData.address.trim() === "") {
            newErrors.address = "Address is required";
        } else if (formData.address.length < 10) {
            newErrors.address =
                "Address must contain at least 10 characters";
        }
    if (formData.city.trim() === "") {
            newErrors.city = "City is required";
        }
        return newErrors;
    };
   const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 9000);
        }
    };
    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            dob: "",
            gender: "",
            address: "",
            city: ""
        });
        setErrors({});
        setSuccess(false);
    };
    return (
        <div className="form-container">
            <h1>Registration Form</h1>
            {success && (
                <div className="success-message">
                    ✓ Form submitted successfully!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                    />
                    {errors.firstName && (
                        <p className="error">
                            {errors.firstName}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                    />
                    {errors.lastName && (
                        <p className="error">
                            {errors.lastName}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    {errors.email && (
                        <p className="error">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter 10 digit mobile number"
                    />
                    {errors.mobile && (
                        <p className="error">
                            {errors.mobile}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                    {errors.password && (
                        <p className="error">
                            {errors.password}
                        </p>
                    )}
                </div>
               <div className="form-group">
                   <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                    {errors.confirmPassword && (
                        <p className="error">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    {errors.dob && (
                        <p className="error">
                            {errors.dob}
                        </p>
                    )}
                </div>
               <div className="form-group">
                    <label>Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">
                            Select Gender
                        </option>
                        <option value="Male">
                            Male
                        </option>
                        <option value="Female">
                            Female
                        </option>
                        <option value="Other">
                            Other
                        </option>
                    </select>
                    {errors.gender && (
                        <p className="error">
                            {errors.gender}
                        </p>
                    )}
                </div>
               <div className="form-group">
                    <label>Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                    ></textarea>
                    {errors.address && (
                        <p className="error">
                            {errors.address}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                    />
                   {errors.city && (
                        <p className="error">
                            {errors.city}
                        </p>
                    )}
                </div>
                <div className="form-buttons">
                    <button type="submit">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}