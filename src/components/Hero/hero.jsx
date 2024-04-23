import "./hero.scss"
import HeroImg from "../../assets/bg-1.png"
function Hero() {
    return (
        <section className="hero container">
            <div className="box">
                <img src={HeroImg} alt="" width={250} height={250} />
            </div>
            <div className="text">
                <div className="title">
                    <p className="d">Hey, I'm</p>
                    <p className="p">Muhammadamin</p>
                </div>
                <div className="title">
                    I'm a Frontend
                    Developer
                </div>
            </div>
        </section>
    )

}

export default Hero