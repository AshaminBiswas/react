import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from "react"
import Card from "../components/Card"
function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card  title="Card1" description="Ashamin1"/>
        <Card  title="Card2" description="Ashamin2"/>
        <Card  title="Card3" description="Ashamin3"/>
        <Card  title="Card4" description="Ashamin4"/>
      </div>

      <Footer />
    </>
  )
}

export default App
