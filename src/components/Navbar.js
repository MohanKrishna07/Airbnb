import React from "react"
import reactlogo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={reactlogo} alt="logo" className="nav--icon"/>
            <h3 className="nav--logo_text"> React Facts</h3>
            <h4 className="nav--title"> React Course - Project 1</h4>
        </nav>
    )
}