import "./hero.scss"
import HeroImg from "../../assets/bg-1.png"
function Hero() {
    return (
        <section className="hero container">
            <div className="box" data-aos="fade-right" data-aos-duration="1500">
                <img src={HeroImg} alt="" width={250} height={250} />
            </div>
            <div className="text" data-aos="fade-left" data-aos-duration="1500">
                <h3>Hey, I'm <span> Muhammadamin</span> I'm a Frontend Developer </h3>
            </div>
        </section>
    )

}

export default Hero