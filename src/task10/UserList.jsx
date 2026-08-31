import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <div className="loading">
                <h2>Loading users...</h2>
            </div>
        );
    }
   if (error) {
        return (
            <div className="error">
                <h2>Error: {error}</h2>
            </div>
        );
    }
    return (
        <div className="user-list-page">
            <h1>User List</h1>
            <p className="subtitle">
                Click on a user name to view details
            </p>
            <div className="user-list">
                {users.map((user) => (
                    <Link
                        to={`/users/${user.id}`}
                        className="user-card"
                        key={user.id}
                    >
                        <h2>{user.name}</h2>
                        <p>
                            Username: {user.username}
                        </p>
                        <span>
                            View Details →
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}