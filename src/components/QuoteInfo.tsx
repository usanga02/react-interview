import building from "../assets/icons/building.svg";

type Props = {};

const QuoteInfo = (props: Props) => {
  return (
    <div className="border space-y-8 rounded-md p-5 px-7">
      <div className="flex justify-between">
        <h2 className="font-bold text-brand-dark text-xl">Quote Information</h2>
        <p>Expected delivery date : 2024-12-02</p>
      </div>
      <div className="flex justify-between">
        <div className="font-[500] text-brand-text/65 space-y-3">
          <p>Title</p>
          <p>RFQ No.</p>
          <p>Requestor</p>
          <p>Status</p>
          <p>Department</p>
        </div>
        <div className="text-sidebar-text font-[500] space-y-3">
          <p>Request for Equipments</p>
          <p>RQ #01234</p>
          <p className="space-x-2">
            <span className="text-brand-bold font-bold bg-brand-pink px-2 pt-1 pb-1.5 rounded-full w-8 h-8">
              JD
            </span>
            <span>Jane Doe</span>
            <span className="font-[500] text-brand-text/65">
              Head Nurse, Paediatrics
            </span>
          </p>
          <p>
            <span className="bg-brand-pink text-[#F56630] font-[500] text-xs px-2 rounded-full">
              Awaiting
            </span>
          </p>
          <p>Maternity</p>
        </div>
        <div className="border space-y-4 rounded-md w-[352px] h-fit p-5">
          <div className="flex gap-2">
            <img src={building} alt="" />
            <p className="text-xs text-sidebar-gray">Client</p>
          </div>
          <div className="flex">
            <span className="px-3 pb-2 pt-1 rounded-full font-[600] bg-brand-pink text-brand-bold">
              w
            </span>
            <div className="ml-2">
              <p className="font-[500] text-sm text-brand-bold">
                Westend Hospital
              </p>
              <p className="text-xs text-sidebar-gray">Clear street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfo;
