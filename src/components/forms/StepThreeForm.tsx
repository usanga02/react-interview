import ItemComp from "../ItemComp";
import ItemsTable from "../ItemsTable";
import QuoteInfo from "../QuoteInfo";

type Props = {};

const StepThreeForm = (props: Props) => {
  return (
    <div>
      <QuoteInfo />
      <ItemsTable />
      <ItemComp />
    </div>
  );
};

export default StepThreeForm;
