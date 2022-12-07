import React from "react"
import airlogo from "../images/airbnb.png"

export default function Navbar1() {
    return(
        <nav className="nav1">
            <img src={airlogo} alt="logo" className="nav1--icon"/>
            <h4>React Course - Project 2</h4>
        </nav>
    )
}
