import React from "react";
import "../../bootstrap.min.css";

const Header = props => {
  return (
    <header>
      <h1 className="text-center">{props.titulo}</h1>
    </header>
  );
};

export default Header;
