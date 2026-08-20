import React, { useState } from "react";
export default function SignIn() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="signin-page">
            {signIn ? (
                <div className="signin-card">
                    <h1>Welcome!</h1>
                    <p>You are successfully signed in.</p>
                    <button onClick={() => setSignIn(false)}>Sign Out</button>
                </div>
            ) : (
                <div className="signin-card">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Enter your name"/>
                    <input type="password" placeholder="Enter your password"/>
                    <button onClick={() => setSignIn(true)}> Sign In</button>
                </div>
            )}
        </div>
    );
}