import React from "react";
import { Link } from "react-router-dom";

const AccountComponent = () => {

    return (
        <li className="bottom__user--login user">
            <Link to="/signIn" className="bottom__user--a">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            </Link>
            <div className="expanding--menu hidden">
                <Link to="/signIn">Login</Link>
                <Link to="/signUp">Register</Link>
            </div>
        </li>
    )
}
export default AccountComponent;