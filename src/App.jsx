// import "./App.css";
// import React from "react";
// import SelfIntroduction from "./SelfIntroduction";
// import UserCard from "./UserCard";
// export default function App() {
//    const user1 = {
//         name: "Rahul Patil",
//         age: 22,
//         city: "Bangalore",
//         mobile: "9876543210",
//         email: "rahul@gmail.com",
//         occupation: "Software Developer",
//         address: "Bangalore"
//     };
//     const user2 = {
//         name: "Priyanka Patil",
//         age: 24,
//         city: "Belagavi",
//         mobile: "9876543211",
//         email: "priya@gmail.com",
//         occupation: "Web Developer",
//         address: "Belagavi"
//     };
//     const user3 = {
//         name: "Amit Eagapgol",
//         age: 25,
//         city: "Mysore",
//         mobile: "9876543212",
//         email: "amit@gmail.com",
//         occupation: "Software Engineer",
//         address: "Mysore"
//     };
//     const user4 = {
//         name: "Ankit Patil",
//         age: 23,
//         city: "Pune",
//         mobile: "9876543213",
//         email: "sneha@gmail.com",
//         occupation: "UI Designer",
//         address: "Pune"
//     };
//     const user5 = {
//         name: "Shubham Akiwate",
//         age: 26,
//         city: "Hyderabad",
//         mobile: "9876543214",
//         email: "vikram@gmail.com",
//         occupation: "Full Stack Developer",
//         address: "Hyderabad"
//     };
//   return (
//     <div className="container">
//       {/* <SelfIntroduction /> */}
//         <h1 className="title">User Information</h1>

//         <div className="user-container">

//             <UserCard
//                 name={user1.name}
//                 age={user1.age}
//                 city={user1.city}
//                 mobile={user1.mobile}
//                 email={user1.email}
//                 occupation={user1.occupation}
//                 address={user1.address}
//             />

//             <UserCard
//                 name={user2.name}
//                 age={user2.age}
//                 city={user2.city}
//                 mobile={user2.mobile}
//                 email={user2.email}
//                 occupation={user2.occupation}
//                 address={user2.address}
//             />

//             <UserCard
//                 name={user3.name}
//                 age={user3.age}
//                 city={user3.city}
//                 mobile={user3.mobile}
//                 email={user3.email}
//                 occupation={user3.occupation}
//                 address={user3.address}
//             />

//             <UserCard
//                 name={user4.name}
//                 age={user4.age}
//                 city={user4.city}
//                 mobile={user4.mobile}
//                 email={user4.email}
//                 occupation={user4.occupation}
//                 address={user4.address}
//             />

//             <UserCard
//                 name={user5.name}
//                 age={user5.age}
//                 city={user5.city}
//                 mobile={user5.mobile}
//                 email={user5.email}
//                 occupation={user5.occupation}
//                 address={user5.address}
//             />

//         </div>

//     </div>
//   );
// }

// import "./App.css";
// import React from 'react'
// import UseStateHook from "./task4/UseStateHook";
// import DarkMode from "./task4/DarkMode";
// import SignIn from "./task4/SignIn";
// export default function App() {
//     const employees = [
//       {
//             id: 1,
//             name: "Rahul Patil",
//             role: "Software Developer",
//             company: "Infosys",
//             experience: "2 Years",
//             branch: "Computer Science"
//         },
//         {
//             id: 2,
//             name: "Priyanka Patil",
//             role: "Web Developer",
//             company: "TCS",
//             experience: "1 Year",
//             branch: "Computer Science"
//         },
//         {
//             id: 3,
//             name: "Amit Eagappol",
//             role: "Software Engineer",
//             company: "Wipro",
//             experience: "3 Years",
//             branch: "Information Science"
//         },
//         {
//             id: 4,
//             name: "Ankit Patil",
//             role: "Frontend Developer",
//             company: "Accenture",
//             experience: "2 Years",
//             branch: "Computer Science"
//         },
//         {
//             id: 5,
//             name: "Sneha Joshi",
//             role: "UI Designer",
//             company: "Tech Mahindra",
//             experience: "1 Year",
//             branch: "Information Technology"
//         }
//     ];
//   return (<div>
//             <div className="container">
//             <h1>Employee Details</h1>
//             <div className="employee-container">
//                 {employees.map((employee) => (
//                     <div className="employee-card" key={employee.id}>
//                         <h2>{employee.name}</h2>
//                         <p><b>Role:</b> {employee.role}</p>
//                         <p><b>Company:</b> {employee.company}</p>
//                         <p><b>Experience:</b> {employee.experience}</p>
//                         <p><b>Branch:</b> {employee.branch}</p>
//                     </div>
//                 ))}
//             </div>
            
//         </div>
//         <div className="app">
//             <h1>useState Hook</h1>
//             <div className="components">
//                 <UseStateHook />
//                 <DarkMode />
//                 <SignIn />
//             </div>
//         </div>
//         </div>
//   )
// }


import React from 'react'
// import ConditionalForm from './task5/ConditionalForm'
// import FetchUsers from './task6/FetchUsers';
import ProfilePicture from './task 7/ProfilePicture';
export default function App() {
  return (
    <div>
      {/* <ConditionalForm /> */}
      {/* <FetchUsers /> */}
      <ProfilePicture />
    </div>
  )
}
