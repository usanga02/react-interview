import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightIcon?: React.ReactNode;
  error?: boolean;
  helperText?: string | false;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, rightIcon, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sidebar-gray text-sm font-bold">{label}</label>
        )}
        <div className="relative">
          <input
            className={cn(
              `flex w-full rounded-md border ${
                error && `border-red-300`
              } px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 error:border-red-200`,
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute top-1/2 right-1 -translate-y-1/2 ">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && <p className="text-red-300 text-xs">{helperText}</p>}
      </div>
    );
  }
);

export default Input;
