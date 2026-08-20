import React, { useState } from "react";
export default function DarkMode() {
    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? "theme-card dark-theme" : "theme-card light-theme"}>
            <h2>Theme Toggle</h2>
            <button onClick={() => setDark(!dark)}>Switch to {dark ? "Light" : "Dark"} Mode</button>
            <p>You are in {dark ? "Dark" : "Light"} mode</p>
        </div>
    );
}