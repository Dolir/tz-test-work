import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/header.css";
import "../styles/modal.css";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ProfileModal from "./ProfileModal";
function Header() {
  const { pathname } = useLocation();
  const [profileModal, setProfileModal] = React.useState(null);
  const auth = useSelector((state) => state.auth);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    if (auth.isAuthenticated) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [auth.isAuthenticated]);

  return (
    <header>
      <nav>
        <NavLink to="/">
          <h4
            className={
              pathname === "/" ||
              pathname.startsWith("/category") ||
              pathname.startsWith("/search")
                ? "active-nav"
                : ""
            }
          >
            Главная
          </h4>
        </NavLink>
        <NavLink to="/cart">
          <h4 className={pathname === "/cart" ? "active-nav" : ""}>Корзина</h4>
        </NavLink>
      </nav>
      <h1>STIRKA</h1>
      <div className="auth-search">
        <SearchBar />
        <div className="auth">
          {" "}
          <LoginModal modal={modal} setModal={setModal} error={auth.msg} />
          <h4 onClick={() => setProfileModal(true)}>
            {auth.user ? auth.user.username : "Войти"}
          </h4>
          {auth.isAuthenticated && auth.user ? (
            <ProfileModal
              modal={profileModal}
              setModal={setProfileModal}
              data={auth.user}
            />
          ) : (
            ""
          )}
          <svg
            onClick={() => setProfileModal(true)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 21.6C16.9322 19.4755 14.5819 18 11.8543 18C9.35273 18 7.16858 19.2411 6 21.0857"
              stroke="#172853"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="11" stroke="#172853" strokeWidth="2" />
            <circle
              cx="12"
              cy="10.8"
              r="3.8"
              stroke="#172853"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
