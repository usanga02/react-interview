import Breadcrumbs from "../components/ui/BreadCrumbs";
import FormStep from "../components/forms/FormStep";
import QuoteForm from "../components/QuoteForm";
import ResponseConfirmModal from "../components/ResponseConfirmModal";
import { useState } from "react";

const QuoteResponse = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="space-y-4">
      <ResponseConfirmModal />
      <Breadcrumbs />
      <FormStep activeStep={step} />
      <QuoteForm step={step} setStep={setStep} />
    </div>
  );
};

export default QuoteResponse;
