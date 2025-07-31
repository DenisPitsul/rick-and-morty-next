"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { PAGES } from "@/app/config/pages.config";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    classNames("nav-link", {
      [styles.active]: pathname === href,
    });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand fs-3 ubuntu" href={PAGES.HOME}>
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <Link className={linkClass("/")} href={PAGES.HOME}>
              Characters
            </Link>
            <Link className={linkClass("/episodes")} href={PAGES.EPISODES}>
              Episode
            </Link>
            <Link className={linkClass("/location")} href={PAGES.LOCATIONS}>
              Location
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
