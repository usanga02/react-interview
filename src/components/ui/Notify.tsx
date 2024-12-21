import { useAppContext } from "../../context/AppContext";
import close from "../../assets/icons/Close.svg";
import misc from "../../assets/icons/Misc.svg";

const Notify = () => {
  const { message, setMessage } = useAppContext();
  return (
    <>
      {message != null && (
        <div
          className={`bg-white text-brand-dark flex border ${
            message ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-transform duration-1000 ease-in-out items-center justify-between overflow-hidden md:justify-start gap-8 fixed top-20 right-3 md:right-10 z-100 rounded-md w-96`}
        >
          <div className="flex w-full relative">
            <div
              className={`${
                message.variant == "error" ? `bg-red-400 ` : `bg-green-400`
              } absolute w-2 left-0 h-full`}
            />
            <div
              className={` flex items-center w-full font-bold text-brand-dark py-4 pl-6`}
            >
              <img src={misc} alt="" />
              <span className="ml-10">{message.message}</span>
            </div>
          </div>
          <div
            onClick={() => setMessage(null)}
            className="p-2 border border-transparent mr-3 hover:border-sidebar- rounded-md cursor-pointer"
          >
            <img src={close} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Notify;
