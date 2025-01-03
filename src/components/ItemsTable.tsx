import { calculateTotal, formatMoney } from "../helpers/format";

type Props = {
  items: {
    name: string;
    id: string;
    variant: string;
    quantity: number;
    unit: string;
    price: number;
    amount: number;
    deliveryDate: string;
    image: string;
  }[];
};

const ItemsTable = ({ items }: Props) => {
  return (
    <div className="border space-y-4 rounded-md p-5 px-4">
      <h2 className="font-bold text-brand-dark text-xl">Item(s)</h2>
      <div className="rounded-lg overflow-hidden border">
        <table className="w-full table-auto text-left">
          <thead className="text-sidebar-text border-b font-normal text-xs">
            <tr className="bg-table-gray">
              <th className="pt-2 pl-10 pr-3">
                <input type="checkbox" />
              </th>
              <th className="py-3 pr-10">Items</th>
              <th className="py-3 pr-10 pl-10">Variants</th>
              <th className="py-3 pr-10 pl-10">Quantity</th>
              <th className="py-3 pr-10 pl-10">Price</th>
              <th className="py-3 pr-10 pl-10">Amount</th>
              <th className="py-3 pr-10 pl-10">Expected Delivery Date</th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((item, index) => (
              <tr key={index} className="divide-y h-fit">
                <td className="py-1 pl-10 pr-3">
                  <div className="flex">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="py-1 pr-10">
                  <div className="flex">
                    <img src={item.image} alt="" />
                    <div className="ml-2 text-sm flex flex-col">
                      <span className="font-[500] text-brand-bold">
                        {item.name}
                      </span>
                      <span className="text-sidebar-gray font-normal">
                        #{item.id}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-10 pl-10">{item.variant ?? "NIL"}</td>
                <td className="py-3 pr-10 pl-10">
                  <div className=" flex gap-1">
                    <span>{item.quantity}</span>
                    <span>{item.unit}</span>
                  </div>
                </td>
                <td className="py-3 pr-10 pl-10">${item.price}</td>
                <td className="py-3 pr-10 pl-10">${item.amount}</td>
                <td className="py-3 pr-10 pl-10">{item.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-16 pr-24">
        <div className="space-y-3">
          <p>Sub Total</p>
          <p>Total</p>
        </div>
        <div className="space-y-3">
          <p>$8,000.00</p>
          <p className="font-bold">
            ${formatMoney(calculateTotal(items).toString())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
