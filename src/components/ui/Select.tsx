import { Field } from "formik";
import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options:
    | {
        name: string;
        id: string;
        variant: string | null;
        quantity: number;
        unit: string;
        price: number;
        amount: number;
        deliveryDate: string;
      }[]
    | {
        name: string;
        value: string;
        label: string;
        details: {
          description: string;
          price: number;
        };
      }[]
    | string[];
  label?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-[#00113D] text-sm font-[600]">{label}</label>
        )}
        <select
          className="border px-2 py-1.5 rounded-md w-full min-w-44 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
          ref={ref}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={JSON.stringify(option)}>
              {typeof option == "string" ? option : option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
