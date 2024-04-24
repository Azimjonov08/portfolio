import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/hero"
import Who from "../../components/Who/Who"
import Skils from "../../components/Skils/Skils"
import "./Home.scss"

function Home() {
  return (
    < div className="home">
      <Header />
      <Hero />
      <Who />
      <Skils />

      <Footer />

    </>
  )
}

export default Home