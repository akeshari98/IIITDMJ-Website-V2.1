import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import AccessibilityHeader from "./components/AccessibilityHeader";
import { useSelector } from 'react-redux';
import ErrorBoundary from "./errors/ErrorBoundary";
import ScrollToTopSet from "./components/ScrollToTop"
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
  const fontSize = useSelector((state) => state.fontSize); // Access Redux font size

  // Update CSS variable whenever fontSize changes
  useEffect(() => {
    document.documentElement.style.setProperty('--dynamic-font-size', `${fontSize}px`);
  }, [fontSize]);
  return (
   <ErrorBoundary>
    <ScrollToTopSet/>
     <div>
      <div className="overflow-x-hidden " style={{ fontSize: `${fontSize}px` }}>
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
          hasError={true}
        />
       
      </div>
    </div>
   </ErrorBoundary>
  );
}

export default App;
