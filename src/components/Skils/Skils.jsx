import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiSass, SiMui } from "react-icons/si";
import { FaReact, FaBootstrap } from "react-icons/fa";
import "./Skils.scss"


function Skils() {
    return (
        <>
            <section className="container skils">
                <div className="right" data-aos="flip-left" data-aos-duration="1500">
                    <h3>My Programming Skills</h3>
                    <p className="subtitle">I`m Frontend Devolper</p>
                </div>

                <div className="left" data-aos="flip-right" data-aos-duration="1500">
                    <IoLogoHtml5 className="html size"/>
                    <DiCss3 className="css size"/>
                    <FaBootstrap className="boot size"/>
                    <IoLogoJavascript className="js size"/>
                    <SiTailwindcss className="css size"/>
                    <SiSass className="sass size"/>
                    <SiMui className="mui size"/>
                    <FaReact className="react size" />
                </div>
            </section>
        </>
    )
}
export default Skils