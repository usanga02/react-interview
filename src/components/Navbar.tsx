import Button from "./ui/Button";
import arrowBack from "../assets/icons/arrow-left.svg";
import bell from "../assets/icons/bell-logo.svg";
import chat from "../assets/icons/texts.svg";
import avatar from "../assets/images/avatar.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import { useNavigate } from "react-router-dom";
import SearchBox from "./ui/SearchBox";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-white z-50 fixed w-[calc(100%-288px)] items-center justify-between border-b border-[#F0F2F5] px-5 py-2">
      <Button
        className="text-brand-gray font-[500] text-sm pl-1"
        variant="ghost"
        onClick={() => navigate(-1)}
      >
        <img className="mr-2" src={arrowBack} alt="" /> Back
      </Button>
      <div className="flex gap-4">
        <SearchBox />
        <img src={bell} className="cursor-pointer" alt="" />
        <img src={chat} className="cursor-pointer" alt="" />
        <div className="flex w-fit items-center cursor-pointer">
          <img src={avatar} alt="" className="h-8 w-8" />
          <img src={arrowDown} alt="" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
