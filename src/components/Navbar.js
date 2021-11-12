import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <AnchorLink to="#about">About</AnchorLink>
          <AnchorLink to="#projects">Work</AnchorLink>
        </div>
      </nav>
    </div>
  );
}
