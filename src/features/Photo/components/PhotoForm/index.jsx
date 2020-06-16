import Images from "constants/images";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  onSubmit: null
};

export default function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null
  };
  return (
    <Formik initialValues={initialValues}>
      {formikProps => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
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
            <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
                <div className="mt-3">
                  <img
                    width="200px"
                    height="200px"
                    src={Images.COVER_BG}
                    alt="colorful"
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
