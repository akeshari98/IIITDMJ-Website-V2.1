import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/footer"
// import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [MoreOptionToggle, setMoreOptionToggle] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setMoreOptionToggle(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pathname]);
//added tests
  return (
    <>
      {loading && <Loader loading={loading} />}
      <ScrollToTop />
      <Navbar
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
      <Outlet className="overflow-hidden" />
      <Footer
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
    </>
  );
}

const NavLink = [
  {
    id: "01",
    name: "Home",
    link: [
      { "About": "/about" }
    ],
  },
  {
    id: "02",
    name: "Administration",
    link: [
      { "Board of Governers": "/boardofgoverners" },
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "03",
    name: "Departments",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "04",
    name: "Academics",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "05",
    name: "Deans",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "06",
    name: "People",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "07",
    name: "Students",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "08",
    name: "Deans",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "09",
    name: "Research",
    link:"/",
  },
];

export default App;
