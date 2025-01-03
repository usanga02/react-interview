import FileUpload from "../ui/FileUpload";
import FormHeader from "../ui/FormHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import days from "../../assets/icons/days.svg";

const StepTwoForm = () => {
  return (
    <>
      <FormHeader
        title="Terms and Attachments"
        subtitle="Provide detailed information on payment and delivery terms"
      />
      <div className="grid grid-cols-2 gap-4 py-8 border-b">
        <Select
          name="paymentTerms"
          label="Payment Terms"
          options={["Net 30"]}
        />
        <Select
          name="deliverySchedule"
          label="Delivery Schedule"
          options={["Immediate delivery"]}
        />
        <Select
          name="shippingMethod"
          label="Shipping Method"
          options={["Courier Service"]}
        />
        <Input
          className="font-semibold"
          name="leadTime"
          label="Lead Time"
          rightIcon={<img src={days} alt="" />}
          defaultValue={10}
        />
      </div>
      <div className="space-y-5">
        <div>
          <h5 className="font-bold mt-5 text-brand-dark">Attachments</h5>
          <p className="text-sm text-brand-text2">
            Attach all necessary files or documents
          </p>
        </div>
        <FileUpload />
      </div>
    </>
  );
};

export default StepTwoForm;
