import React from "react";
import searchLogo from "../../assets/icons/search-logo.svg";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative min-w-96 mr-3">
        <div className="absolute top-1/2 left-4 -translate-y-1/2 ">
          <img src={searchLogo} alt="" />
        </div>
        <input
          className={cn(
            "flex w-full rounded-md border shadow-sm px-3 pl-12 text-brand-gray py-2 text-sm placeholder:text-brand-gray focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder="Search here..."
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default SearchBox;
