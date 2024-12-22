import Step from "../ui/Step";

type Props = {
  activeStep: number;
};

const FormSteps = ({ activeStep }: Props) => {
  const steps = [
    {
      id: 0,
      title: "Request Information",
      subtitle: "Provide details about the RFG",
      active: true,
    },
    {
      id: 1,
      title: "Terms and Attachments",
      subtitle: "Payments and delivery terms",
    },
    { id: 2, title: "Review", subtitle: "Confirm all information provided" },
  ];
  return (
    <div className="border flex justify-between rounded-md items-center p-5 px-10">
      {steps.map((step, index) => (
        <Step key={index} {...step} activeStep={activeStep} />
      ))}
    </div>
  );
};

export default FormSteps;
