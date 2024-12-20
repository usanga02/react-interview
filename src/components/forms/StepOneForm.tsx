import { FieldArray, FormikContextType, useFormikContext } from "formik";
import deleteIcon from "../../assets/icons/bin.svg";
import Input from "../ui/Input";
import PageHeader from "../ui/PageHeader";
import Select from "../ui/Select";
import { ChangeEvent, useCallback } from "react";
import { formatMoney } from "../../helpers/format";
import { items } from "../../constants/itemsData";

type Props = {};

const StepOneForm = (props: Props) => {
  const {
    values,
    setFieldValue,
    handleChange,
  }: FormikContextType<{
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

  const calculateTotal = useCallback(
    () =>
      values.items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
    [values]
  );

  const handleItemChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedValue = JSON.parse(e.target.value);

    setFieldValue(`items.${index}.name`, selectedValue.name);
    if (selectedValue) {
      setFieldValue(`items.${index}.variant`, selectedValue.variant ?? "NIL");
      setFieldValue(`items.${index}.price`, selectedValue.price);
      setFieldValue(
        `items.${index}.amount`,
        selectedValue.price * selectedValue.quantity
      );
      setFieldValue(`items.${index}.deliveryDate`, selectedValue.deliveryDate);
      setFieldValue(`items.${index}.quantity`, selectedValue.quantity);
    } else {
      setFieldValue(`items.${index}.variant`, "");
      setFieldValue(`items.${index}.price`, "");
    }
  };

  const handleQuantityChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const quantity = e.target.value;

    setFieldValue(`items.${index}.quantity`, quantity);
    setFieldValue(
      `items.${index}.amount`,
      +quantity * values.items[index].price
    );
  };

  return (
    <>
      <PageHeader
        title="Request for Quote"
        subtitle="Fill out these details to send the RFG"
      />
      <div className="grid grid-cols-2 gap-4 py-8 border-b">
        <Input
          label="RFG No."
          name="rfgNo"
          type="number"
          placeholder="RFG-10234"
        />
        <Input
          label="Title"
          name="title"
          type="text"
          placeholder="Request for Equipments"
        />
        <Input
          label="Department"
          name="department"
          type="text"
          placeholder="Maternity"
        />
        <Input
          label="Expected Delivery Date"
          onClick={(e) => e.currentTarget.showPicker()}
          name="deliveryDate"
          type="date"
          placeholder="2024-12-02"
        />
      </div>

      <FieldArray name="items">
        {({ push, remove }) => (
          <div className="space-y-2 py-8 border-b">
            <h5
              onClick={() => push(items[0])}
              className="font-bold cursor-pointer w-fit rounded-sm border px-3 pb-1 text-brand-dark"
            >
              Add Items
            </h5>
            <table className="w-full">
              <thead className="border bg-sidebar- text-left">
                <tr className="font-[500] text-sm">
                  <th className="py-1 pl-2">Items</th>
                  <th className="py-1">Variants</th>
                  <th className="py-1">Quantity</th>
                  <th className="py-1">Price</th>
                  <th className="py-1 pr-3">Expected Delivery Date</th>
                  <th className="py-1">Amount</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {/* @ts-ignore */}
                {values.items.map((_, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 pr-3">
                        <Select
                          name={`items.${index}.name`}
                          // @ts-ignore
                          defaultValue={values.items[index].name}
                          onChange={(e) => handleItemChange(e, index)}
                          options={items}
                        />
                      </td>
                      <td className="pr-3">
                        <Select
                          name={`items.${index}.variant`}
                          // @ts-ignore
                          value={values.items[index].variant}
                          onChange={handleChange}
                          options={["Blue", "Red", "Green"]}
                        />
                      </td>
                      <td className="pr-3">
                        <Input
                          name={`items.${index}.quantity`}
                          // @ts-ignore
                          value={values.items[index].quantity}
                          type="number"
                          onChange={(e) => handleQuantityChange(e, index)}
                        />
                      </td>
                      <td className="pr-3">
                        <Input
                          name={`items.${index}.price`}
                          readOnly
                          // @ts-ignore
                          value={formatMoney(values.items[index].price)}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="pr-3">
                        <Input
                          onClick={(e) => e.currentTarget.showPicker()}
                          // @ts-ignore
                          value={values.items[index].deliveryDate}
                          onChange={handleChange}
                          type="date"
                          name={`items.${index}.deliveryDate`}
                        />
                      </td>
                      <td className="pl-3">
                        <div className="flex min-w-32 justify-between">
                          <Input
                            type="text"
                            name={`items.${index}.amount`}
                            readOnly
                            // @ts-ignore
                            value={formatMoney(values.items[index].amount)}
                            onChange={handleChange}
                          />
                          <img
                            className="cursor-pointer"
                            onClick={() => remove(index)}
                            src={deleteIcon}
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </FieldArray>
      <div className="flex justify-end font-semibold mt-3   gap-16 pr-24">
        <div className="space-y-3">
          <p>Sub Total</p>
          {/* <p>Total</p> */}
        </div>
        <div className="space-y-3">
          <p>$ {formatMoney(calculateTotal().toString())}</p>
          {/* <p className="font-bold">$8,750.00</p> */}
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <label>Note</label>
        <textarea
          className="border rounded-md p-4 min-w-[484px]"
          rows={3}
          placeholder="Enter note here"
        />
        <p className="text-right font-semibold text-xs">0/200</p>
      </div>
    </>
  );
};

export default StepOneForm;
