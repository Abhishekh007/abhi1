import React from 'react'

export default function UserCard({name,age,city,mobile,email,occupation,address}) {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <p>City: {city}</p>
            <p>Mobile Number: {mobile}</p>
            <p>Email: {email}</p>
            <p>Occupation: {occupation}</p>
            <p>Address: {address}</p>
    </div>
  );
}
