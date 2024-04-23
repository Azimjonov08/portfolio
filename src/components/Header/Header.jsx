import Logo from "../../assets/m-white.png"
import "./Header.scss"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="container">
        <NavLink to={`/`} className="nav-link">
          <img src={Logo} alt="" width={95} height={65} />
        </NavLink>

        <div className="nav-right">
          <ul>
            <NavLink className="nav-link" to={`/about`} >
              <li className="list1">About me</li>
            </NavLink>
            <NavLink className="nav-link" to={`/jobs`} >
              <li className="list2">Work</li>
            </NavLink>

            <li className="list3">Contact</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header