import "./hero.scss"
import HeroImg from "../../assets/bg-1.png"
function Hero() {
    return (
        <section className="hero container">
            <div className="box">
                <img src={HeroImg} alt="" width={250} height={250} />
            </div>
            <div className="text">
                <h3>Hey, I'm <span> Muhammadamin</span> I'm a Frontend Developer </h3>
            </div>
        </section>
    )

}

export default Hero