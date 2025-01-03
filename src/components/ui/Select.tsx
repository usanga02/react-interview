import { forwardRef } from "react";
import { cn } from "../../lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sidebar-gray text-sm font-bold">{label}</label>
        )}
        <select
          className={cn(
            "border px-2 py-1.5 rounded-md w-full min-w-44 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-brand-bold",
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
