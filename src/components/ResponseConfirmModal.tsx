import { useAppContext } from "../context/AppContext";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

const ResponseConfirmModal = () => {
  const { handleCloseModal, modal, setModal } = useAppContext();
  return (
    <>
      <Modal
        className="w-[620px] px-8 py-8"
        isOpen={modal === "confirmResponse"}
        handleClose={handleCloseModal}
      >
        <div className="space-y-6">
          <h2 className="font-bold text-xl text-brand-bold">Confirmation</h2>
          <p className="font-[500] text-sm">
            You are about to submit this quote in response to RFQ ID, this will
            immediately be sent to the client “Westend Clear Hospital”. Are you
            sure you want to proceed?
          </p>

          <div className="flex justify-end mt-5 gap-3">
            <Button onClick={handleCloseModal} variant="outline">
              Cancel
            </Button>
            <Button onClick={() => setModal("spinner")} className="px-5">
              Continue
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResponseConfirmModal;
