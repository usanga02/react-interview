import multiply from "../assets/icons/multiply.svg";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import QuoteInfo from "../components/QuoteInfo";
import ItemsTable from "../components/ItemsTable";
import { useNavigate } from "react-router-dom";
import ItemComp from "../components/ItemComp";
import { quote } from "../constants/itemsData";

const Quotes = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <PageHeader
          title="Quote details"
          subtitle="Created on Wed, 12th June 2022, 08:00am"
        />
        <div className="flex gap-3">
          <Button
            className="font-bold"
            onClick={() => navigate("/quote-response")}
          >
            Respond
          </Button>
          <Button className="font-bold" variant="destructive">
            <img src={multiply} className="mr-2" alt="" />
            Reject
          </Button>
        </div>
      </div>

      <QuoteInfo {...quote} />
      <ItemsTable items={quote.items} />
      <ItemComp />
    </div>
  );
};

export default Quotes;
