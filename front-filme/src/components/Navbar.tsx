import { Link } from 'react-router-dom';
import "./Navbar.css"
import { BsFillCameraReelsFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Movie List <BsFillCameraReelsFill /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
