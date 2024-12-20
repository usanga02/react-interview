import { Formik, Form, Field, FieldArray } from "formik";
import { ChangeEvent } from "react";
import * as Yup from "yup";

const itemOptions = [
  {
    value: "item1",
    label: "Item 1",
    details: { description: "Description 1", price: 100 },
  },
  {
    value: "item2",
    label: "Item 2",
    details: { description: "Description 2", price: 200 },
  },
  {
    value: "item3",
    label: "Item 3",
    details: { description: "Description 3", price: 300 },
  },
];

const validationSchema = Yup.object({
  items: Yup.array().of(
    Yup.object({
      selectedItem: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required").positive("Must be positive"),
    })
  ),
});

const StepFourForm = () => {
  const initialValues = {
    items: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FieldArray name="items">
            {({ push, remove }) => (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    push({
                      selectedItem: "",
                      description: "",
                      price: "",
                    })
                  }
                >
                  Add Item
                </button>
                {values.items.map((_, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <div>
                      <label htmlFor={`items.${index}.selectedItem`}>
                        Select Item
                      </label>
                      <Field
                        as="select"
                        name={`items.${index}.selectedItem`}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const selectedValue = e.target.value;
                          const selectedOption = itemOptions.find(
                            (opt) => opt.value === selectedValue
                          );

                          setFieldValue(
                            `items.${index}.selectedItem`,
                            selectedValue
                          );
                          if (selectedOption) {
                            setFieldValue(
                              `items.${index}.description`,
                              selectedOption.details.description
                            );
                            setFieldValue(
                              `items.${index}.price`,
                              selectedOption.details.price
                            );
                          } else {
                            setFieldValue(`items.${index}.description`, "");
                            setFieldValue(`items.${index}.price`, "");
                          }
                        }}
                      >
                        <option value="">Select...</option>
                        {itemOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </Field>
                    </div>

                    <div>
                      <label htmlFor={`items.${index}.description`}>
                        Description
                      </label>
                      <Field name={`items.${index}.description`} readOnly />
                    </div>

                    <div>
                      <label htmlFor={`items.${index}.price`}>Price</label>
                      <Field
                        name={`items.${index}.price`}
                        type="number"
                        readOnly
                      />
                    </div>

                    <button type="button" onClick={() => remove(index)}>
                      Remove Item
                    </button>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepFourForm;
