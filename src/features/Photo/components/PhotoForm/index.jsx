import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  onSubmit: null
};

export default function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: ""
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This is field require."),
    categoryId: Yup.number()
      .required("This is field require.")
      .nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This is field require."),
      otherwise: Yup.string().notRequired()
    })
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={value => console.log("Submit: ", value)}
    >
      {formikProps => {
        // const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="Eg: ..."
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
