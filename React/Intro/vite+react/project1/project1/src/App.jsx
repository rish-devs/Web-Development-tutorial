import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
function App() {
  useEffect(() => {
    alert("Welcome");
  }, [])

  return (
    <>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="cards">
          <Cards title="Card 1" description="Card 1 Description" />
          <Cards title="Card 2" description="Card 2 Description" />
          <Cards title="Card 3" description="Card 3 Description" />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App
