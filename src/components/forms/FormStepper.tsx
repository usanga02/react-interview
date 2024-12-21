import React, { ReactNode, useState } from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import Button from "../ui/Button";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

interface Props extends FormikConfig<FormikValues> {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormStepper = ({ children, step, setStep, ...props }: Props) => {
  const [buttonType, setButtonType] = useState<
    "button" | "submit" | "reset" | undefined
  >("button");
  const stepsArray = React.Children.toArray(
    children as ReactNode[]
  ) as React.ReactElement<FormikStepProps>[];

  const currentStep = stepsArray[step];
  const noOfSteps = stepsArray.length - 1;

  return (
    <Formik {...props}>
      {({ validateForm }) => (
        <Form>
          {currentStep}

          <hr className="mt-8" />
          <div className="flex justify-end mt-5 gap-3">
            <Button
              onClick={() => {
                setButtonType("button");
                setStep(0);
              }}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="button" className="px-5" variant="inverted">
              Save as draft
            </Button>
            <Button
              onClick={() => {
                validateForm();
              
                step < noOfSteps ? setStep(step + 1) : setButtonType("submit")
              }}
              className="px-5 border border-transparent"
              type={buttonType}
            >
              {step < noOfSteps ? "Continue" : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
