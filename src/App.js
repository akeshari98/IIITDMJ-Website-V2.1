import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import AccessibilityHeader from "./components/AccessibilityHeader";

function App() {
  const [loading, setLoading] = useState(false);
  const [MoreOptionToggle, setMoreOptionToggle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setMoreOptionToggle(false);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [pathname]);

  return (
    <div>
      <div className="overflow-x-hidden">
        {loading && <Loader loading={loading} />}
        <ScrollToTop />
        <div className="hidden lg:block">
          <AccessibilityHeader />
        </div>
        <Navbar />
        <Outlet className="overflow-hidden" />
        <Footer
          MoreOptionToggle={MoreOptionToggle}
          setMoreOptionToggle={setMoreOptionToggle}
        />
      </div>
    </div>
  );
}

export default App;
