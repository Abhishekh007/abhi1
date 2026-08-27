import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ComponentTwo from "./ComponentTwo";
export default function ComponentOne() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "component dark" : "component light"}>
            <h2>Component 1</h2>
            <p>This is Component 1.</p>
            <button onClick={toggleTheme}>Switch to {darkMode ? "Light" : "Dark"} Mode</button>
            <ComponentTwo />
        </div>
    );
}