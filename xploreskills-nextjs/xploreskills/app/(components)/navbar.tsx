"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="logo">
        Xplore
        <i style={{ color: "#24f8c7" }} className="fab fa-staylinked"></i>kill
      </Link>
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times"></i>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/course">Course</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars"></i>
    </nav>
  );
}
