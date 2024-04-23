import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./About.scss"

function About() {
    return (
        <section className="about">
            <Header />
            <div className="container box">
                <h2 className="title">
                    About Me
                </h2>
                <p>
                    I am Azimjonov Muhammadamin, 17 years old, software developer, Tashkent, Uzbekistan, currently living in Andijan, Uzbekistan.

                </p>
                <p>
                    I have been doing web development for 4 months. During this time I gained valuable experience and skills in various aspects of web development. I have been involved in many projects for the past 3 months.
                </p>
                <p>
                    If you want to get in touch, I'm very responsive via email and I'm also very active on Telegram.
                </p>

                <p>
                    I am happy to share my experiences in web development with you. So far I have been working as a freelancer. Through these experiences, I gained a deeper understanding that facilitated the learning and acquisition of various knowledge and experiences.
                </p>

                <p>
                    If you're interested in seeing what I've been up to, you can check out my <a href="https://t.me/my_day_develop">Portfolio</a> or my   <a href="https://github.com/Azimjonov08"> GitHub</a>  account. There,you'll find many of the projects I've worked on, which will give you a closer look at what I do.
                </p>
                <p className="p">Best regards 🙂, Muhammadamin</p>
            </div>
            <Footer />
        </section>
    )
}

export default About