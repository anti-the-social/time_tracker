import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./css/top_menu.css";

export default function TopMenu() {
  const pages = [
    { text: "Tracking", path: "/" },
    { text: "Auth", path: "/auth" },
    { text: "Create report", path: "/create_report" },
    { text: "Report", path: "/report" },
  ];

  function li_elem(key, text, path, active_path) {
    return (
      <li key={key} className={active_path === path ? "active" : ""}>
        <Link to={path}>{text}</Link>
      </li>
    );
  }
  function create_pages(arr, active_path) {
    var to_return = [];
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      to_return.push(li_elem(i, item.text, item.path, active_path));
    }
    return to_return;
  }
  function toggle_menu(){
    console.log(opened);
    if(opened){
      setOpened(false);
    }else{
      setOpened(true);
    }
  }

  const [li_elems, setLiElems] = useState([]);
  const [opened, setOpened] = useState(false);
  let location = useLocation();
  useEffect(() => {
    //console.log(location);
    setLiElems(create_pages(pages, location.pathname));
  }, [location.pathname]);

  return (
    <div>
      <div className="top_menu_hamburger" onClick={toggle_menu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="top_menu" style={ opened ? { height: 40*4+'px'} : { height:'0'}} >
        <ul>{li_elems}</ul>
      </div>
    </div>
 );
}
