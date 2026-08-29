import React from "react";
import {
    NavLink,
    Outlet
} from "react-router-dom";
export default function Services() {
    return (
        <div className="page">
            <h1>Our Services</h1>
            <p>
                Select one of our services below.
            </p>
            <div className="service-links">
                <NavLink
                    to="web-development"
                    className={({ isActive }) =>
                        isActive ? "sub-active" : ""
                    }
                >
                    Web Development
                </NavLink>
                <NavLink
                    to="app-development"
                    className={({ isActive }) =>
                        isActive ? "sub-active" : ""
                    }
                >
                    App Development
                </NavLink>
                <NavLink
                    to="ui-ux-design"
                    className={({ isActive }) =>
                        isActive ? "sub-active" : ""
                    }
                >
                    UI/UX Design
                </NavLink>
            </div>
            <div className="nested-content">
                <Outlet />
            </div>
        </div>
    );
}