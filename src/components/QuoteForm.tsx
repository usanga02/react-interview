import Button from "./ui/Button";
import StepTwoForm from "./forms/StepTwoForm";
import { FormStepper } from "./forms/FormStepper";
import { FormikValues } from "formik";
import StepOneForm from "./forms/StepOneForm";
import StepThreeForm from "./forms/StepThreeForm";
import StepFourForm from "./forms/StepFourForm";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const QuoteForm = ({ setStep, step }: Props) => {
  const initialValues = {
    items: [],
  };

  const handleSubmit = () => {};

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
        <StepFourForm />
      </FormStepper>
    </div>
  );
};

export default QuoteForm;
