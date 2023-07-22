"use client";
export default function Display() {
  function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("hidden");
  }

  return (
    <>
      <div className="hero text-center">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <label
                tabIndex={0}
                className="btn-ghost btn-circle btn"
                onClick={toggleMenu}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleMenu();
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                id="dropdown-menu"
                className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow hidden"
              >
                <li>
                  <a>Go Back</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <h2 className="py-7 pt-5 text-center font-poppins text-4xl font-extrabold">
            Information is <span className="text-primary">Wealth</span>
          </h2>
        </div>
      </div>
      <div className="right-0 top-0 m-4 hidden pt-2 lg:absolute lg:block xl:block 2xl:block">
        <button className="btn-primary btn-outline btn px-4 py-2" onClick={''}>
          Go Back
        </button>
      </div>
      <div className="right-32 top-0 m-4 hidden pt-2 lg:absolute lg:block xl:block 2xl:block">
        <button className="btn-primary btn-outline btn px-4 py-2" onClick={''}>
         Download
        </button>
      </div>
    </>
  );
}
