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
                <div className="right">
                    <h3>My Programming Skills</h3>
                    <p>I`m Frontend Devolper</p>
                </div>

                <div className="left">
                    <IoLogoHtml5 className="html"/>
                    <DiCss3 className="css"/>
                    <FaBootstrap className="boot"/>
                    <IoLogoJavascript className="js"/>
                    <SiTailwindcss className="css"/>
                    <SiSass className="sass"/>
                    <SiMui className="mui"/>
                    <FaReact className="react" />
                </div>
            </section>
        </>
    )
}
export default Skils