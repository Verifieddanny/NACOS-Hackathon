import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { BsSun, BsMoon } from "react-icons/bs";
import { HomePage } from "./Pages/HomePage";
import { ErrorPage } from "./Pages/ErrorPage";
import logo from "./assets/Logo.png";
import logoDark from "./assets/Logo dark.png";
function App() {
  const localS = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localS);
  const [navOn, setNavOn] = useState(true);

  useEffect(() => {
    switch (theme) {
      case null:
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "light");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        break;
      default:
        break;
    }
  }, [theme]);
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <nav className="nav">
        <img src={theme === "dark" ? logoDark : logo} className="logo" />
        <div
          className={`InnerNav ${
            open
              ? "top-0 opacity-100"
              : "top-[-1000%] lg:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
          }`}
          onClick={() => setOpen(!open)}
        >
          <Link className="NavLinks" to="/">
            Blog
          </Link>

          <a className="NavLinks" href="mailto:dannyclassic56@gmail.com">
            Email
          </a>

          <a className="NavLinks" href="https://wa.link/di56b8">
            Whatsapp
          </a>

          <button
            type="button"
            onClick={() => {
              setTheme((prev) => {
                if (prev === "dark") {
                  return "light";
                } else {
                  return "dark";
                }
              });
            }}
            className="grid place-items-center  NavLinks relative "
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
        </div>
        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} setTheme={setTheme} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
