import React from "react"

import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      backgroundColor: "#b4d455",
    }}
  >
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/code">Code</Link>
      <Link to="/blog">Blog</Link>
    </ul>
  </div>
)

export default Menu
