import Logo from "../../assets/m-white.png"
import "./Header.scss"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="container">
        <div className="boxx" data-aos="fade-down" data-aos-duration="1500">
          <NavLink to={`/`} className="nav-link">
            <img className="logo" src={Logo} alt="" width={95} height={65} />
          </NavLink>

          <div className="nav-right">
            <ul>
              <NavLink className="nav-link" to={`/about`} >
                <li className="list">About me</li>
              </NavLink>
              <NavLink className="nav-link" to={`/jobs`} >
                <li className="list">Work</li>
              </NavLink>

              <li className="list">Contact</li>
            </ul>
          </div>
        </div>


      </header>
    </>
  )
}

export default Header