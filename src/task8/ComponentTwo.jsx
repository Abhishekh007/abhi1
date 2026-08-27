import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ComponentThree from "./ComponentThree";
export default function ComponentTwo() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "component dark" : "component light"}>
            <h2>Component 2</h2>
            <p>Theme received using useContext.</p>
            <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>
            <ComponentThree />
        </div>
    );
}