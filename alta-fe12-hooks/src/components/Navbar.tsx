import React, { FC } from "react";

interface NavbarProps {
  name?: string;
  handleProfile?: React.MouseEventHandler;
}

const Navbar: FC<NavbarProps> = ({ name, handleProfile }) => {
  return (
    <div className="navbar w-screen bg-white shadow-md z-10 top-0 sticky">
      <div className="flex-1 ml-7">
        <img
          src="https://academy.alterra.id/blog/wp-content/uploads/2021/06/cropped-cropped-Alterra-Academy-logo.png"
          width={90}
          height={90}
        />
        <p className="text-alta-space-cadet ml-10 font-semibold">
          ALTA FRONTEND 12
        </p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a
              className="text-alta-space-cadet hover:bg-alta-space-cadet hover:rounded-md hover:text-white"
              href=""
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-alta-space-cadet hover:bg-alta-space-cadet hover:rounded-md hover:text-white"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-alta-space-cadet hover:bg-alta-space-cadet hover:rounded-md hover:text-white"
              href=""
            >
              Experience
            </a>
          </li>
          <li>
            <p
              className="text-alta-orange font-semibold"
              onClick={handleProfile}
            >
              {name ? `Hi, Good Evening ${name}` : `You're not logged in`}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
