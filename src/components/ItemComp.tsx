import { useState } from "react";
import arrowDown from "../assets/icons/arrow-down.svg";
import signDoc from "../assets/icons/sign-doc.svg";

const ItemComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border flex justify-between rounded-md items-center p-4 px-5">
      <div className="flex items-start gap-1">
        <img src={signDoc} alt="" className="mt-1" />
        <div>
          <h2 className="font-bold text-brand-dark text-xl">
            Terms and Attachments
          </h2>
          <p className="text-sm text-sidebar-gray">
            Review payment and delivery terms
          </p>
        </div>
      </div>
      <div className="cursor-pointer px-3.5 pt-3 pb-2 rounded-full">
        <img
          onClick={() => setOpen(!open)}
          src={arrowDown}
          alt=""
          className={`w-7 h-8 transition-transform ${open && `rotate-180`}`}
        />
      </div>
    </div>
  );
};

export default ItemComp;
