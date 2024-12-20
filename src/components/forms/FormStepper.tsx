import React, { ReactNode } from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import Button from "../ui/Button";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

interface Props extends FormikConfig<FormikValues> {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormStepper = ({ children, step, setStep, ...props }: Props) => {
  const stepsArray = React.Children.toArray(
    children as ReactNode[]
  ) as React.ReactElement<FormikStepProps>[];

  const currentStep = stepsArray[step];
  const noOfSteps = stepsArray.length;
  function isLastStep() {
    return step === stepsArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentStep.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          // setCompleted(true);
        } else {
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {currentStep}

          <hr className="mt-8" />
          <div className="flex justify-end mt-5 gap-3">
            <Button onClick={() => setStep(0)} type="button" variant="outline">
              Cancel
            </Button>
            <Button type="button" className="px-5" variant="inverted">
              Save as draft
            </Button>
            <Button
              onClick={() => step < noOfSteps && setStep(++step)}
              disabled={isSubmitting}
              className="px-5 border border-transparent"
              type={step < noOfSteps ? "button" : "submit"}
            >
              {step < noOfSteps ? "Continue" : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
