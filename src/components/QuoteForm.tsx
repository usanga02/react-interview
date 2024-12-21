import StepTwoForm from "./forms/StepTwoForm";
import { FormStepper } from "./forms/FormStepper";
import StepOneForm from "./forms/StepOneForm";
import StepThreeForm from "./forms/StepThreeForm";
import { items } from "../constants/itemsData";
import { FormikValues } from "formik";
import { useAppContext } from "../context/AppContext";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const QuoteForm = ({ setStep, step }: Props) => {
  const { setModal } = useAppContext();
  const initialValues = {
    items: [...items],
  };

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    setModal("confirmResponse");
  };

  return (
    <div className="border justify-between rounded-md items-center p-5 px-10">
      <FormStepper
        step={step}
        setStep={setStep}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <StepOneForm />
        <StepTwoForm />
        <StepThreeForm />
      </FormStepper>
    </div>
  );
};

export default QuoteForm;
