import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Header() {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <div
            className="navbar-collapse collapse justify-content-between"
            id="navbar-content"
          >
            <ul className="navbar-nav mr-auto">
              {/* 메인 화면 */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>

              {/* About me */}
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">
                   About Me
                </Link>
              </li>

              {/* 게시판 */}
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tech Board
                </div>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/bbslist">
                    See Content
                  </Link>
                  <Link className="dropdown-item" to="/bbswrite">
                    Write Content
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {auth ? (
                <>
                  {/* 회원 정보 */}
                  <li className="nav-item">
                      <Link className="nav-link" to="/checkpwd">
                        <i className="fas fa-sign-out-alt"></i> Hello, {auth} !  <i className="fab fa-ello"></i>{" "} &nbsp;{" "}
                      </Link>
                  </li>

                  {/* 로그아웃 */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* 로그인 */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

                  {/* 회원가입 */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/join">
                      Join
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
