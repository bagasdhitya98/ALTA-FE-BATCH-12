import React, { FC } from "react";

interface NavbarProps {
  name?: string;
}

const Navbar: FC<NavbarProps> = ({ name }) => {
  return (
    <div className="navbar w-screen bg-white shadow-md z-10 top-0 sticky">
      <div className="flex-1 ml-7">
        <img
          src="https://academy.alterra.id/blog/wp-content/uploads/2021/06/cropped-cropped-Alterra-Academy-logo.png"
          width={90}
          height={90}
        />
        <a className="text-black ml-10 font-semibold">ALTA FRONTEND 12</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <p>{name ? `Hi, Good Evening ${name}` : `You're not logged in`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
