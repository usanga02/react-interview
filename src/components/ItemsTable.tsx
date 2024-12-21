
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
  }[];
};

const ItemsTable = ({ items }: Props) => {
  // const items = [
  //   {
  //     name: "Oxygen concentration",
  //     id: "28373",
  //     variant: "blue",
  //     quantity: 100,
  //     unit: "pieces",
  //     price: 200.0,
  //     amount: 2000.0,
  //     deliveryDate: "2024-08-07",
  //     image: avatar,
  //   },
  //   {
  //     name: "Mechanical ventilation",
  //     id: "28373",
  //     variant: null,
  //     quantity: 45,
  //     unit: "kg",
  //     price: 350.0,
  //     amount: 2500.0,
  //     deliveryDate: "2024-08-07",
  //     image: avatar,
  //   },
  //   {
  //     name: "Patient monitor",
  //     id: "28373",
  //     variant: "blue",
  //     quantity: 30,
  //     unit: "unit",
  //     price: 300.0,
  //     amount: 1500.0,
  //     deliveryDate: "2024-08-07",
  //     image: avatar,
  //   },
  //   {
  //     name: "Mechanical ventilation",
  //     id: "28373",
  //     variant: "blue",
  //     quantity: 35,
  //     unit: "unit",
  //     price: 200.0,
  //     amount: 1500.0,
  //     deliveryDate: "2024-08-07",
  //     image: avatar,
  //   },
  // ];

  return (
    <div className="border space-y-4 rounded-md p-5 px-4">
      <h2 className="font-bold text-brand-dark text-xl">Item(s)</h2>
      <div className="rounded-lg overflow-hidden border">
        <table className="w-full table-auto text-left">
          <thead className="text-sidebar-text border-b font-normal text-xs">
            <tr className="bg-table-gray">
              <th className="pt-2 pr-4 pl-10">
                <input type="checkbox" />
              </th>
              <th className="py-3 pr-10 pl-10">Items</th>
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
                <td className="py-1 pr-4 pl-10">
                  <div className="flex">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="py-1 pr-10 pl-10">
                  <div className="flex">
                    {/* <img src={item.image} alt="" /> */}
                    <div className="ml-2 flex flex-col">
                      <span>{item.name}</span>
                      <span>{item.id}</span>
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
          <p className="font-bold">$8,750.00</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
