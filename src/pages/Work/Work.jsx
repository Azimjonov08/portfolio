import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Work.scss"
import { useState,useEffect } from "react"
import Adidas from "../../assets/adidas.png"
import Cpick from "../../assets/cpick.png"
import Mini from "../../assets/mini.png"
import MyP from "../../assets/my-pf.png"
import Movie from "../../assets/movie.jpg"
import MyS from "../../assets/my-site.png"

function Work() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://6624001404457d4aaf9b6661.mockapi.io/v1/img")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);

    return (
        <>
            <section className="work ">
                <Header />
                <div className="container">
                    <h2 className="title">
                        Portfolio
                    </h2>
                    <div className="list">
                        {data.map((item, index) => {
                            return (
                                <div className="item">
                                    <img src={item.avatar} alt="" width={350} height={250} />
                                    <h4>{item.namr}</h4>
                                    <p>
                                        {item.about}
                                    </p>
                                    <div className="box">
                                        <a href={item.link}>Live Prewiew</a>
                                        <a href={item.git}>Wiew Code</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Work