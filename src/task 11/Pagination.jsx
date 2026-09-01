import React from "react";
import { useSearchParams } from "react-router-dom";
export default function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const users = [
        {
            id: 1,
            name: "Rahul Patil",
            email: "rahul@gmail.com",
            city: "Bangalore",
            role: "Developer"
        },
        {
            id: 2,
            name: "Priyanka Patil",
            email: "priyanka@gmail.com",
            city: "Belagavi",
            role: "Designer"
        },
        {
            id: 3,
            name: "Amit Kumar",
            email: "amit@gmail.com",
            city: "Mysore",
            role: "Developer"
        },
        {
            id: 4,
            name: "Ankit Joshi",
            email: "ankit@gmail.com",
            city: "Pune",
            role: "Tester"
        },
        {
            id: 5,
            name: "Sneha Sharma",
            email: "sneha@gmail.com",
            city: "Mumbai",
            role: "Designer"
        },
        {
            id: 6,
            name: "Vikram Singh",
            email: "vikram@gmail.com",
            city: "Hyderabad",
            role: "Developer"
        },
        {
            id: 7,
            name: "Neha Kulkarni",
            email: "neha@gmail.com",
            city: "Hubli",
            role: "Tester"
        },
        {
            id: 8,
            name: "Karan Mehta",
            email: "karan@gmail.com",
            city: "Chennai",
            role: "Developer"
        },
        {
            id: 9,
            name: "Pooja Reddy",
            email: "pooja@gmail.com",
            city: "Hyderabad",
            role: "Manager"
        },
        {
            id: 10,
            name: "Rohit Patil",
            email: "rohit@gmail.com",
            city: "Kolhapur",
            role: "Developer"
        },
        {
            id: 11,
            name: "Snehal Desai",
            email: "snehal@gmail.com",
            city: "Belagavi",
            role: "Tester"
        },
        {
            id: 12,
            name: "Akash Kumar",
            email: "akash@gmail.com",
            city: "Delhi",
            role: "Developer"
        },
        {
            id: 13,
            name: "Kavya Rao",
            email: "kavya@gmail.com",
            city: "Bangalore",
            role: "Designer"
        },
        {
            id: 14,
            name: "Manoj Patil",
            email: "manoj@gmail.com",
            city: "Dharwad",
            role: "Developer"
        },
        {
            id: 15,
            name: "Riya Sharma",
            email: "riya@gmail.com",
            city: "Mumbai",
            role: "Manager"
        },
        {
            id: 16,
            name: "Suresh Kumar",
            email: "suresh@gmail.com",
            city: "Mysore",
            role: "Tester"
        },
        {
            id: 17,
            name: "Divya Joshi",
            email: "divya@gmail.com",
            city: "Pune",
            role: "Developer"
        },
        {
            id: 18,
            name: "Nikhil Rao",
            email: "nikhil@gmail.com",
            city: "Chennai",
            role: "Designer"
        },
        {
            id: 19,
            name: "Megha Patil",
            email: "megha@gmail.com",
            city: "Hubli",
            role: "Developer"
        },
        {
            id: 20,
            name: "Arjun Singh",
            email: "arjun@gmail.com",
            city: "Delhi",
            role: "Manager"
        }
    ];
    const recordsPerPage = 5;
    const totalPages = Math.ceil(
        users.length / recordsPerPage
    );
    const startIndex =
        (currentPage - 1) * recordsPerPage;
    const currentUsers = users.slice(
        startIndex,
        startIndex + recordsPerPage
    );
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setSearchParams({
                page: currentPage - 1
            });
        }
    };
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setSearchParams({
                page: currentPage + 1
            });
        }
    };
    return (
        <div className="pagination-page">
            <h1>User Pagination</h1>
            <p className="page-info">
                Current Page: {currentPage}
            </p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                   <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.role}</td>
                            </tr>
                       ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination-buttons">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next →
                </button>
           </div>
        </div>
    );
}