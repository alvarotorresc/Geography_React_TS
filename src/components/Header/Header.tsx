import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container " >
            <p className="navbar-brand header mr-auto">
                Geography App
            </p>
           
        </div>
    </nav>
  );
};

export default Header;
