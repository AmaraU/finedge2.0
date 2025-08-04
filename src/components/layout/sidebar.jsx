import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import logoutIcon from "@/assets/logout.svg";
import logo from "@/assets/sidebar/logo.svg";
import { LOGOUT } from "@/store/actions/types";
import { addMenu, setActiveMenu } from "@/store/reducers/menu.reducer";
import { ModuleIcon, userRights } from "@/utils/constants";
import { ROUTES } from "@/utils/routes";
import { filterMenuByRights } from "@/utils/utils";
const SideBar = () => {
  const modules = filterMenuByRights(userRights);
  const dispatch = useDispatch();

  const handleAddMenu = (menu) => {
    dispatch(addMenu(menu));
    dispatch(setActiveMenu(menu));
    console.log(menu);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.HSAccordion) {
        window.HSAccordion.autoInit();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [modules]);

  return (
    <div>
      {/* Navigation Toggle */}
      <div className="md:hidden py-2 text-center top-0 left-0">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-950 focus:outline-hidden focus:bg-gray-900"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-sidebar-collapsible-group"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-sidebar-collapsible-group"
        >
          <img src={logo} alt="Logo" className="w-7 h-8" />
        </button>
      </div>
      {/* End Navigation Toggle */}

      {/* Sidebar */}
      <div
        id="hs-sidebar-collapsible-group"
        className="hs-overlay [--auto-close:md] md:block md:translate-x-0 md:end-auto md:bottom-0 w-62
                hs-overlay-open:translate-x-0
                -translate-x-full transition-all duration-300 transform
                h-full
                hidden
                fixed top-0 start-0 bottom-0 z-60
                bg-white border-e border-gray-200
                "
        role="dialog"
        tab-index="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full ">
          {/* Header */}
          <header className="p-5 flex justify-between items-center gap-x-2">
            <a
              className="flex items-center gap-2 font-semibold text-md text-slate-700 focus:outline-hidden focus:opacity-8"
              href="#"
              aria-label="Brand"
            >
              <img src={logo} alt="Logo" className="w-7 h-8" />
              FinEdge Web Portal
            </a>

            <div className="md:hidden -me-2">
              {/* Close Button */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                data-hs-overlay="#hs-sidebar-collapsible-group"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              {/* End Close Button */}
            </div>
          </header>
          <hr className="border-gray-200 mb-4" />
          {/* End Header */}

          {/* Body */}
          <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div
              className="hs-accordion-group p-4 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1">
                <h3 className="text-slate-500 text-xs px-2">MENU</h3>
                <li className="hs-accordion" id="users-accordion">
                  <Link to={"/dashboard"}>
                    <button
                      type="button"
                      className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-md
                                            text-slate-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:text-white focus:bg-indigo-800
                                            "
                      aria-expanded="true"
                      aria-controls={"users-accordion-collapse-" + +1}
                    >
                      <img className="group-hover:hidden" src={" "} alt={""} />
                      <img className="focus:block hidden" src={" "} alt={""} />
                      Dashboard
                      <svg
                        className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </Link>
                </li>
                {modules?.map((module, i) => {
                  const moduleTitle = Object.keys(module)[0];
                  const buttons = module[moduleTitle];

                  return (
                    <li key={i} className="hs-accordion" id="users-accordion">
                      <button
                        type="button"
                        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-md
                                            text-slate-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:text-white focus:bg-indigo-800
                                            "
                        aria-expanded="true"
                        aria-controls={"users-accordion-collapse-" + (i + 1)}
                      >
                        {" "}
                        <img
                          className="group-hover:hidden"
                          src={ModuleIcon[moduleTitle]}
                          alt={module.label}
                        />
                        <img
                          className="focus:block hidden"
                          src={module.activeIcon}
                          alt={module.label}
                        />
                        {moduleTitle}
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {module && (
                        <div
                          id={"users-accordion-collapse-" + (i + 1)}
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion"
                        >
                          <ul
                            className="hs-accordion-group pt-1 ps-7 space-y-1"
                            data-hs-accordion-always-open
                          >
                            {buttons.map((child, index) => (
                              <li
                                onClick={() => {
                                  handleAddMenu(child);
                                }}
                                key={index}
                              >
                                <Link
                                  className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                  to={child.path}
                                >
                                  {child.label}
                                  <svg
                                    className="ms-auto size-5 text-gray-800 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></svg>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          {/* End Body */}
          <div className="p-4">
            <hr className="border-gray-200 mb-4" />
            <div
              onClick={() => {
                dispatch({ type: LOGOUT });
                Navigate(ROUTES.AUTH.LOGIN);
              }}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex items-center">
                <img src={logoutIcon} />
                <p className="text-slate-500 text-md">Logout</p>
              </div>
              <img src={logoutIcon} />
            </div>
          </div>
        </div>
      </div>

      {/* End Sidebar */}
    </div>
  );
};

export default SideBar;
