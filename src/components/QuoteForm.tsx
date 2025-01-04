import StepTwoForm from "./forms/StepTwoForm";
import { FormStepper } from "./forms/FormStepper";
import StepOneForm from "./forms/StepOneForm";
import StepThreeForm from "./forms/StepThreeForm";
import { quote } from "../constants/itemsData";
import { FormikValues } from "formik";
import { useAppContext } from "../context/AppContext";
import * as yup from "yup";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const QuoteForm = ({ setStep, step }: Props) => {
  const { setModal } = useAppContext();
  const initialValues = {
    rfgNo: "",
    title: "",
    department: "",
    deliveryDate: "",
    items: [...quote.items],
  };

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    setModal("confirmResponse");
  };

  const validationSchema = yup.object({
    rfgNo: yup.string().required("Required"),
    title: yup.string().required("Required"),
    department: yup.string().required("Required"),
    deliveryDate: yup.string().required("Required"),
    items: yup.array().of(
      yup.object({
        name: yup.string().required("Required"),
        id: yup.string().required("Required"),
        variant: yup.string().required("Required"),
        quantity: yup
          .number()
          .required("Required")
          .positive("Must be positive"),
        unit: yup.string().required("Required"),
        amount: yup.number().required("Required").positive("Must be positive"),
        deliveryDate: yup.string().required("Required"),
        price: yup.number().required("Required").positive("Must be positive"),
      })
    ),
  });

  return (
    <div
      className={`${
        step < 2 && `border px-5`
      } justify-between rounded-md items-center py-5`}
    >
      <FormStepper
        step={step}
        setStep={setStep}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
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
