import React, { useEffect, useState } from "react";
import "./CrudUsers.css";
export default function CrudUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
   const [website, setWebsite] = useState("");
    const [editId, setEditId] = useState(null);
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
    const addUser = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            phone: phone,
            website: website
        };
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((data) => {
                const userWithId = {
                    ...data,
                    id: users.length + 1
                };
                setUsers([...users, userWithId]);
                clearForm();
                alert("User added successfully!");
            })
            .catch(() => {
                alert("Failed to add user");
            });
    };
    const deleteUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                setUsers(
                    users.filter((user) => user.id !== id)
                );
                alert("User deleted successfully!");
            })
            .catch(() => {
                alert("Failed to delete user");
            });
    };
   const editUser = (user) => {
        setEditId(user.id);
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setWebsite(user.website);
    };
    const updateUser = (e) => {
        e.preventDefault();
        const updatedUser = {
            id: editId,
            name: name,
            email: email,
            phone: phone,
            website: website
        };
        fetch(
            `https://jsonplaceholder.typicode.com/users/${editId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setUsers(
                    users.map((user) =>
                        user.id === editId
                            ? { ...user, ...data }
                            : user
                    )
                );
                clearForm();
                alert("User updated successfully!");
            })
            .catch(() => {
                alert("Failed to update user");
            });
    };
    const clearForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setEditId(null);
    };
    if (loading) {
        return <h2 className="loading">Loading users...</h2>;
    }
    if (error) {
        return <h2 className="error">{error}</h2>;
    }
    return (
        <div className="crud-container">
            <h1>User CRUD Operations</h1>
            <div className="form-card">
                <h2>
                    {editId ? "Update User" : "Add New User"}
                </h2>
                <form
                    onSubmit={editId ? updateUser : addUser}
                >
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter Website"
                        value={website}
                        onChange={(e) =>
                            setWebsite(e.target.value)
                        }
                        required
                    />
                    <button type="submit">
                        {editId
                            ? "Update User"
                            : "Add User"}
                    </button>
                    {editId && (
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={clearForm}
                        >
                            Cancel
                        </button>
                    )}
                </form>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button
                                        className="edit-button"
                                        onClick={() =>
                                            editUser(user)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}