import RandomPhoto from "components/RandomPhoto";
import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string
};

RandomPhotoField.defaultProps = {
  label: ""
};

export default function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = newImageUrl => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </FormGroup>
  );
}
