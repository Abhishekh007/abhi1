import React from "react";
import { useSelector } from "react-redux";
export default function ComponentB() {
    const formData = useSelector(
        (state) => state.form.formData
    );
    return (
        <div className="display-card">
            <h2>Component B - User Details</h2>
            {formData ? (
                <div className="user-details">
                    <p>
                        <strong>Name:</strong> {formData.name}
                    </p>
                    <p>
                       <strong>Email:</strong> {formData.email}
                   </p>
                    <p>
                        <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p>
                        <strong>City:</strong> {formData.city}
                    </p>
                    <p>
                        <strong>Role:</strong> {formData.role}
                    </p>
                </div>
            ) : (
                <p className="no-data">
                    No data available. Please submit the form.
                </p>
            )}
        </div>
    );
}