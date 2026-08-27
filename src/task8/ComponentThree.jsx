import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function ComponentThree() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "component dark" : "component light"}>
            <h2>Component 3</h2>
            <p>Data accessed directly using useContext.</p>
            <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>
        </div>
    );
}