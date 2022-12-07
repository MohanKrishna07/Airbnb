import React from "react"
import gridimage from "../images/grid.png"

export default function Main1() {
    return (
        <section className="main1">
            <img src={gridimage} alt="grid" className="main1--image"/>
            <h1 className="section-header">Hybrid Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all at exotic locations or at the comfort of your home.</p>
        </section>
    )
}