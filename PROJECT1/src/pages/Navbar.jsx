gitimport navBrand from "../assets/WhatsApp Image 2023-06-18 at 16.32.11.jpg"
import elipsLogo from "../assets/Ellipse 1.svg"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="main-navbar d-flex align-itmes-center">
      <nav className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={navBrand} alt="" />
        </div>
        <ul className="d-flex gap-5 list-unstyled">
          <li>New Task</li>
          <li>All Tasks</li>
          <div>
            <img className="w-75" src={elipsLogo} alt="" />
          </div>
        </ul>
      </nav>
    </div>
  

  )
}

export default Navbar