import StepTwoForm from "./forms/StepTwoForm";
import { FormStepper } from "./forms/FormStepper";
import StepOneForm from "./forms/StepOneForm";
import StepThreeForm from "./forms/StepThreeForm";

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
      </FormStepper>
    </div>
  );
};

export default QuoteForm;
