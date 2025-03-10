import React from "react";
import { Link } from "react-router";
import { CN } from "../../../utils/index";

const NavigationLink = ({ children, className, ...props }) => {
  return (
    <Link className={CN("no-underline text-black")} {...props}>
      {children}
    </Link>
  );
};

export default NavigationLink;