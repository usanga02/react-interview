import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div className="flex flex-col gap-4 items-center py-12 justify-center">
      <ClipLoader color={"#00f"} size={80} />
      <p className="font-bold text-lg">Sending Quotes...</p>
    </div>
  );
}

export default Spinner;
