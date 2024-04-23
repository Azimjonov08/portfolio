import "./Who.scss"
import { NavLink } from "react-router-dom";

function Who() {
    return (
        <>
            <section className="container who">
                <div className="right">
                    <h3>Who I'm ? </h3>
                    <p>I'm Muhammadamin Azimjonov</p>
                </div>
                <div className="left">
                    <p>
                        Hello there 👋. I am a frontend developer and on this site I share interesting things about my life, technology and career. This program is my personal portfolio
                    </p>
                    <NavLink className="nav-link" to={`/about`} >
                        <a>
                            see more...
                        </a>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Who