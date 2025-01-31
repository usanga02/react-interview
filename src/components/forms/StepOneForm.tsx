import { FieldArray, FormikContextType, useFormikContext } from "formik";
import deleteIcon from "../../assets/icons/bin.svg";
import Input from "../ui/Input";
import { ChangeEvent } from "react";
import { calculateTotal, formatMoney } from "../../helpers/format";
import { quote } from "../../constants/itemsData";
import { FormStep } from "./FormStepper";
import FormHeader from "../ui/FormHeader";
import packs from "../../assets/icons/packs.svg";
import SelectComp from "../ui/SelectComp";
import { DatePicker } from "../ui/datePicker";

const StepOneForm = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
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

  const handleItemChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const value = e.target.value;
    const selectedValue = quote.items.find((item) => item.name == value)!;

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
    const quantity = e.target.value.replace(/[^0-9]/g, "");

    setFieldValue(`items.${index}.quantity`, quantity);
    setFieldValue(
      `items.${index}.amount`,
      +quantity * values.items[index].price
    );
  };

  const handleDateChange = (
    e: any,
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const date = new Date(e).toLocaleDateString();
    setSelectedValue(e);
    setFieldValue(`deliveryDate`, date);
  };

  const handleItemDateChange = (
    e: any,
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>,
    index: number
  ) => {
    const date = new Date(e).toLocaleDateString();
    setSelectedValue(e);
    setFieldValue(`items.${index}.deliveryDate`, date);
  };

  return (
    <FormStep>
      <FormHeader
        title="Request for Quote"
        subtitle="Fill out these details to send the RFG"
      />
      <div className="grid grid-cols-2 gap-4 py-8 border-b">
        <Input
          label="RFG No.*"
          name="rfgNo"
          value={values?.rfgNo}
          onChange={handleChange}
          type="text"
          placeholder="RFG-10234"
          error={!!touched.rfgNo && !!errors.rfgNo}
          helperText={touched.rfgNo && errors.rfgNo}
        />
        <Input
          label="Title*"
          name="title"
          value={values?.title}
          onChange={handleChange}
          type="text"
          placeholder="Request for Equipments"
          error={!!touched.title && !!errors.title}
          helperText={touched.title && errors.title}
        />
        <Input
          label="Department*"
          name="department"
          value={values?.department}
          onChange={handleChange}
          type="text"
          placeholder="Maternity"
          error={!!touched.department && !!errors.department}
          helperText={touched.department && errors.department}
        />
        <div>
          <DatePicker
            label="Expected Delivery Date*"
            value={values?.deliveryDate}
            onChange={(e, setSelectedValue) =>
              handleDateChange(e, setSelectedValue)
            }
            placeholder="2024-12-02"
            error={!!touched.deliveryDate && !!errors.deliveryDate}
          />
          <span className="font-[500] text-xs text-[#667185]">
            Calculated based on lead time and issue date
          </span>
        </div>
      </div>

      <FieldArray name="items">
        {({ push, remove }) => (
          <div className="space-y-2 py-8 border-b">
            <h5
              onClick={() => push(quote.items[0])}
              className="font-bold cursor-pointer w-fit rounded-sm pr-3 pb-1 text-brand-dark"
            >
              Add Items
            </h5>
            <table className="w-full">
              <thead className="border bg-sidebar- text-left">
                <tr className="font-[500] text-sm text-brand-gray">
                  <th className="py-1 pl-2">Items</th>
                  <th className="py-1">Variants</th>
                  <th className="py-1">Quantity</th>
                  <th className="py-1">Price</th>
                  <th className="py-1 pr-3">Expected Delivery Date</th>
                  <th className="py-1">Amount</th>
                </tr>
              </thead>
              <tbody className="text-brand-bold">
                {/* @ts-ignore */}
                {values.items.map((_, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 pr-3">
                        <SelectComp
                          className="text-brand-text2"
                          name={`items.${index}.name`}
                          // @ts-ignore
                          value={values.items[index].name}
                          onChange={(e) => handleItemChange(e, index)}
                          options={[...quote.items.map((item) => item.name)]}
                        />
                      </td>
                      <td className="pr-3">
                        <SelectComp
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
                          type="text"
                          rightIcon={<img src={packs} alt="" />}
                          onChange={(e) => handleQuantityChange(e, index)}
                        />
                      </td>
                      <td className="pr-3">
                        <Input
                          name={`items.${index}.price`}
                          readOnly
                          // @ts-ignore
                          value={`$ ${formatMoney(values.items[index].price)}`}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="pr-3">
                        <DatePicker
                          // @ts-ignore
                          value={values.items[index].deliveryDate}
                          onChange={(e, setSelectedValue) =>
                            handleItemDateChange(e, setSelectedValue, index)
                          }
                        />
                      </td>
                      <td className="pl-3">
                        <div className="flex min-w-32 gap-2 justify-between">
                          <Input
                            type="text"
                            name={`items.${index}.amount`}
                            className="border-0 font-bold text-sidebar-text"
                            readOnly
                            // @ts-ignore
                            value={`$${formatMoney(
                              values.items[index].amount.toString()
                            )}`}
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
      <div className="flex justify-end mt-5 gap-16 lg:pr-[70px] 2xl:pr-28">
        <div className="space-y-3">
          <p>Sub Total</p>
        </div>
        <div className="space-y-3">
          <p>$ {formatMoney(calculateTotal(values.items).toString())}</p>
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <label>Note</label>
        <textarea
          className="border rounded-md p-4 min-w-[484px]"
          rows={3}
          placeholder="Enter note here"
        />
        <p className="text-right font-semibold mt-2 text-xs">0/200</p>
      </div>
    </FormStep>
  );
};

export default StepOneForm;
