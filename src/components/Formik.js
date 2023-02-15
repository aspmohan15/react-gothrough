import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const SignupForm = () => {
  const validationSchema = Yup.array().of(
    Yup.object().shape({
      city: Yup.string().required("Cirty is required"),
      country: Yup.string().required("country is required"),
    })
  );
  const [initialValue, setInitialValues] = useState([
    {
      id: 3407,
      city: "'Adan Governorate",
      country: "Yemen",
    },
    {
      id: 2118,
      city: "Ad Dakhiliyah Governorate",
      country: "Oman",
    },
    {
      id: 2119,
      city: "Ad Dhahirah Governorate",
      country: "Oman",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div className="mt-5 mx-4">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(data, { errors }) => {
          console.log(data);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row w-50">
              {initialValue.map((country, ind) => {
                // return;
                console.log(errors[ind]?.city);
                console.log(errors[ind]?.country);
                return (
                  <>
                    <div className="row mt-3">
                      <label className="mb-2">{country.country}</label>
                      {/* {console.log(values[ind].city)} */}
                      <div className="col-4">
                        <input
                          type="text"
                          onChange={handleChange}
                          value={values[ind].country}
                          placeholder={"Country"}
                          name={`${ind}.country`}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors[ind]?.country}
                      <div className="col-4 mx-2">
                        <input
                          type="text"
                          onChange={handleChange}
                          value={values[ind].city}
                          placeholder={"City"}
                          name={`${ind}.city`}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors[ind]?.city}
                    </div>
                  </>
                );
              })}
            </div>
            {console.log(errors, "error")}
            {/* {console.log(values)} */}

            {/* {console.log(values)} */}
            <div className="mt-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
