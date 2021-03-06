import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  option: [],
  label: "",
  placeholder: "",
  disabled: false
};

export default function InputField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find(option => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectedOptionChange = selectedOption => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        options={options}
        placeholder={placeholder}
        isDisabled={disabled}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
