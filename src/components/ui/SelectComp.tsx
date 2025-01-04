import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./Select";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
  className?: string;
  value?: string;
}

const SelectComp = ({ options, label, value, className }: SelectProps) => {
  return (
    <div className={cn("w-full min-w-36 space-y-1", className)}>
      {label && <label>{label}</label>}
      <Select value={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComp;
