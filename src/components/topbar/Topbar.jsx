import "./topbar.scss";
import { Person } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
              aminis.
            </a>
            <div className="itemContainer">
              <Person className="icon" />
              <span>+7 747 802 8004</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>aminassipova@gmail.com</span>
            </div>
        </div>
            <div className="right">
              <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}
