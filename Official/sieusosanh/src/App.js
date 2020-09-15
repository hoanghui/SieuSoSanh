import React from 'react';
// import logo from './logo.svg';

import IndexNavbar from "../src/components/Navbars/IndexNavbar.js";
import IndexHeader from "../src/components/Headers/IndexHeader.js";


function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar/>
      <IndexHeader/>
      <div className="main">
        {/* <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />*/}
      </div>
    </>
  );
}

export default App;
