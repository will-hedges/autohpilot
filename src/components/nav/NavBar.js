import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const HomeNavIcon = () => {
  return (
    <a href="http://localhost:3000">
      <img
        src="paper-plane-512.png"
        alt="a clipart blue paper plane"
        className="navbar__icon"
      />
    </a>
  );
};

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <HomeNavIcon />
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/my_notes">
          My Notes
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/create_note">
          New Note
        </Link>
      </li>
      {localStorage.getItem("autohpilot_user") ? (
        <li className="navbar__item active">
          <button
            className="navbar__logout"
            to=""
            onClick={() => {
              localStorage.removeItem("autohpilot_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
