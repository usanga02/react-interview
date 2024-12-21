import { FormikContextType, useFormikContext } from "formik";
import ItemComp from "../ItemComp";
import ItemsTable from "../ItemsTable";
import QuoteInfo from "../QuoteInfo";

const StepThreeForm = () => {
  const {
    values
  }: FormikContextType<{
    rfgNo: string;
    title: string;
    department: string;
    deliveryDate: string;
    items: {
      name: string;
      id: string;
      variant: string;
      quantity: number;
      unit: string;
      price: number;
      amount: number;
      deliveryDate: string;
    }[];
  }> = useFormikContext();

  return (
    <div className="space-y-5">
      <QuoteInfo {...values} />
      <ItemsTable items={values.items} />
      <ItemComp />
    </div>
  );
};

export default StepThreeForm;
