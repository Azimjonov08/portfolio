import "./Footer.scss"
import GitImg from "../../assets/git.svg"
import TgImg from "../../assets/telegram.svg"
import InsImg from "../../assets/insta.svg"
import LinkImg from "../../assets/linkedin.svg"
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className="container">
                <NavLink to={`/`} >
                    <h4>© Muhammadamin</h4>
                </NavLink>
                <div className="box-link">
                    <a href="">
                        <img src={GitImg} alt="https://github.com/Azimjonov08" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammadamin-azimjonov-823b28302/">
                        <img src={LinkImg} alt="" width={30} height={30} />
                    </a>
                    <a href="https://t.me/my_day_develop">
                        <img src={TgImg} alt="" width={30} height={30} />
                    </a>
                    <a href="https://www.instagram.com/im_azimjonov/">
                        <img src={InsImg} alt="" width={30} height={30} />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer 