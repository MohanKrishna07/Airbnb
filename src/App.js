import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Navbar1 from "./components/Navbar1"
import Main1 from "./components/Main1"
import Card from "./components/Card"
import Data from "./components/Data"
import Footer from "./components/Footer"

export default function App() {

    const cardComponents = Data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Navbar1 />
            <Main1 />
            <section className="cardlist">{cardComponents}</section>
            <Footer/>
        </div>
    )
}