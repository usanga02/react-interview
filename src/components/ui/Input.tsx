import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, rightIcon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-[#00113D] text-sm font-[600]">{label}</label>
        )}
        <div className="relative">
          <input
            className={cn(
              "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute top-1/2 right-4 -translate-y-1/2 ">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
