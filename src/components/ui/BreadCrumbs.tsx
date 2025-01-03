import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ separator = "/" }) => {
  const location = useLocation();
  const pathnames: string[] = location.pathname
    .split("/")
    .filter((x) => x && x !== "user");

  const isLast = (index: number) => {
    return index === pathnames.length - 1;
  };

  if (pathnames.length === 1 && pathnames[0] === "dashboard") return null;

  return (
    <>
      <ul className="flex font-[500] items-center gap-1.5 text-sm pb-4">
        <li>
          <Link to="/" className="text-brand-blue">
            Quote
          </Link>
        </li>
        {pathnames.map((name, index) => {
          if (name === "dashboard") return null;

          const activeLink = isLast(index);
          const updatedName = name.replace("-", " ");

          return (
            <Fragment key={name}>
              <li>{separator}</li>
              {activeLink ? (
                <div className="flex justify-between items-center w-[100%]">
                  <li className="capitalize">{updatedName}</li>
                </div>
              ) : (
                <li className="w-fit flex items-center shrink-0">
                  <Link
                    to={`/${pathnames
                      .slice(0, pathnames.indexOf(name) + 1)
                      .join("/")}`}
                    className="text-link capitalize w-fit shrink-0 flex text-[#999999]"
                  >
                    {updatedName}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Breadcrumbs;
