import React, { useEffect, useState } from "react";
import {
    useParams,
    useNavigate
} from "react-router-dom";
export default function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("User not found");
                }
                return response.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);

            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return (
            <div className="loading">
                <h2>Loading user details...</h2>
            </div>
        );
    }
    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
                <button onClick={() => navigate("/users")}>Back to Users</button>
            </div>
        );
    }
    return (
        <div className="details-page">
            <div className="details-card">
                <h1>User Details</h1>
                <div className="detail-item">
                    <b>Name:</b>
                    <span>{user.name}</span>
                </div>
                <div className="detail-item">
                    <b>Username:</b>
                    <span>{user.username}</span>
                </div>
                <div className="detail-item">
                    <b>Email:</b>
                    <span>{user.email}</span>
                </div>
                <div className="detail-item">
                    <b>Phone:</b>
                    <span>{user.phone}</span>
                </div>
                <div className="detail-item">
                    <b>Website:</b>
                    <span>{user.website}</span>
                </div>
                <div className="detail-item">
                    <b>City:</b>
                    <span>{user.address.city}</span>
                </div>
                <div className="detail-item">
                    <b>Company:</b>
                    <span>{user.company.name}</span>
                </div>
                <button
                    className="back-button"
                    onClick={() => navigate("/users")}
                >
                    ← Back to Users
                </button>
            </div>
        </div>
    );
}