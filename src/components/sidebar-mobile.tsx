import React, {useState} from "react";
import {Menu, X} from "react-feather";

import SidebarContent from "./sidebar-content";

interface SidebarMobileProps {
  location: Location;
}

const SidebarMobile = ({location}: SidebarMobileProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const clickHandler = () => setSidebarExpanded(!sidebarExpanded);

  const menuButton = (
    <div
      className="shadow-1 ba br-100 b--white negative pa3 flex flex-column items-center"
      onClick={clickHandler}
      onKeyPress={clickHandler}
      role="button"
      tabIndex={0}
    >
      {sidebarExpanded ? <X /> : <Menu />}
    </div>
  );

  const sidebar = (
    <div className="fixed top-0 left-0 h-100 w-100 bg-canvas">
      <SidebarContent location={location} />
    </div>
  );

  return (
    <>
      {sidebarExpanded ? sidebar : ""}
      <div className="fixed right-1 bottom-2">{menuButton}</div>
    </>
  );
};

export default SidebarMobile;
