import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Modal from "./ui/Modal";
import Spinner from "./ui/spinner";

const SpinnerModal = () => {
  const { handleCloseModal, modal, setMessage } = useAppContext();
  useEffect(() => {
    if (modal === "spinner") {
      console.log("modal");
      setTimeout(() => {
        handleCloseModal();
        setMessage({ variant: "success", message: "Successfully sent quote" });
      }, 3000);
    }
  }, [modal]);
  return (
    <>
      <Modal
        className="w-[584px] py-8"
        isOpen={modal === "spinner"}
        handleClose={handleCloseModal}
      >
        <Spinner />
      </Modal>
    </>
  );
};

export default SpinnerModal;
