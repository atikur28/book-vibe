import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/listed-books",
      pathName: "Listed Books",
    },
    {
      path: "/pages-to-read",
      pathName: "Pages to Read",
    },
  ];
  return (
    <div className="flex items-center justify-between px-3 lg:px-10 py-8">
      <div className="flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((navLink, idx) => (
              <NavLink
                key={idx}
                to={navLink.path}
                className={({ isActive }) =>
                  `mb-2 px-5 py-3 rounded-xl transition-colors duration-200 ${
                    isActive
                      ? `font-bold border border-[#23BE0A] text-[#23BE0A]`
                      : `border border-transparent text-gray-600 hover:text-[#23BE0A] hover:border-[#23BE0A]`
                  }`
                }
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {navLink.pathName}
              </NavLink>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold text-2xl lg:text-3xl"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Book Vibe
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:gap-5">
        {navLinks.map((navLink, idx) => (
          <NavLink
            key={idx}
            to={navLink.path}
            className={({ isActive }) =>
              `px-5 py-3 rounded-xl transition-colors duration-200 ${
                isActive
                  ? `font-bold border border-[#23BE0A] text-[#23BE0A]`
                  : `border border-transparent text-gray-600 hover:text-[#23BE0A] hover:border-[#23BE0A]`
              }`
            }
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {navLink.pathName}
          </NavLink>
        ))}
      </div>
      <div
        className="flex items-center gap-2"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <Link
          to="/sign-in"
          className="mr-3 px-3 md:px-5 py-1.5 md:py-3 text-sm md:text-base rounded-xl transition-colors duration-200 font-bold cursor-pointer bg-[#23BE0A] text-white"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="px-5 py-3 rounded-xl transition-colors duration-200 font-bold cursor-pointer bg-[#59C6D2] text-white hidden md:flex"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
