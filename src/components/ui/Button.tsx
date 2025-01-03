import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const buttonStyles = cva({
  base: [
    "whitespace-nowrap rounded-md",
    "inline-flex items-center justify-center",
    "text-sm font-bold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      default:
        "bg-[#175CFF] transition-transform duration-1000 text-white hover:bg-blue-700 focus-visible:ring-blue-300",
      inverted:
        "text-[#175CFF] border-[#175CFF] border bg-white hover:bg-gray-50 focus-visible:ring-blue-300",
      destructive:
        "bg-[#D42620] text-white hover:bg-red-700 focus-visible:ring-red-300",
      outline: "border text-dark-900 bg-white hover:bg-gray-50",
      ghost: "hover:bg-gray-50",
    },
    size: {
      default: "h-8 p-3 pt-2.5",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonStyles({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
