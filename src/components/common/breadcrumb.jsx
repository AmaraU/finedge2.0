import { Link } from "react-router-dom";

import { ModuleIcon } from "@/utils/constants";
import { formatBreadcrumbLabel } from "@/utils/utils";

const BreadCrumb = ({ pathnames }) => {
  return (
    <ol className="flex items-center whitespace-nowrap">
      {pathnames.map((segment, index) => {
        const isLast = index === pathnames.length - 1;

        return (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}

            {index === 0 && (
              <img
                src={
                  ModuleIcon[
                    pathnames[index].replace(/\b\w/g, (c) => c.toUpperCase())
                  ]
                }
                alt=""
              />
            )}

            {index === 0 || isLast ? (
              <span
                className={`text-sm ${
                  isLast
                    ? "font-semibold text-gray-800 dark:text-neutral-200"
                    : "text-gray-500 dark:text-neutral-500"
                } capitalize`}
              >
                {formatBreadcrumbLabel(segment)}
              </span>
            ) : (
              <Link
                to={"/" + pathnames.slice(0, index + 1).join("/")}
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 capitalize"
              >
                {formatBreadcrumbLabel(segment)}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default BreadCrumb;
