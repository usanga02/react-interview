"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Button from "./Button";
import { formatDate } from "@/helpers/format";

interface DateProps {
  label?: string;
  value: string;
  onChange: (
    e: Date | undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  placeholder?: string;
  error?: boolean;
}

export function DatePicker({
  label,
  value,
  onChange,
  placeholder,
  error,
}: DateProps) {
  const [selectedValue, setSelectedValue] = useState(value);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="text-sidebar-gray text-sm font-bold">{label}</label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal h-9",
              !value && "text-muted-foreground",
              error && `border-red-300`
            )}
          >
            <CalendarIcon />
            <span className="pl-2 pt-0.5 placeholder:text-muted-foreground ">
              {value ? (
                formatDate(value)
              ) : (
                <span className="text-brand-text2">{placeholder}</span>
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            //   @ts-ignore
            selected={selectedValue}
            onSelect={(e) => {
              onChange(e, setSelectedValue);
              setOpen(false);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
