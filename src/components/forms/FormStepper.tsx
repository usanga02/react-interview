import React, { ReactNode } from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import Button from "../ui/Button";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

interface Props extends FormikConfig<FormikValues> {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormStep = ({ children }: FormikStepProps) => {
  return <>{children as ReactNode}</>;
};

export const FormStepper = ({ children, step, setStep, ...props }: Props) => {
  const stepsArray = React.Children.toArray(
    children as ReactNode[]
  ) as React.ReactElement<FormikStepProps>[];

  const currentStep = stepsArray[step];
  const noOfSteps = stepsArray.length - 1;

  return (
    <Formik
      validationSchema={currentStep.props.validationSchema}
      {...props}
      onSubmit={async (values, helpers) => {
        if (step == noOfSteps) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({}) => (
        <Form>
          {currentStep}

          {step < 2 && <hr className="mt-6" />}
          <div className="flex justify-end mt-8 gap-5">
            <Button
              onClick={() => {
                setStep(0);
              }}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="button" className="px-10" variant="inverted">
              Save as draft
            </Button>
            <Button className="px-10 border border-transparent" type="submit">
              {step < noOfSteps ? "Continue" : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
