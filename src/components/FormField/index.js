import React from "react";
import PropTypes from "prop-types";

import { FormContainer, Label, Input } from "./styles";

export default function FormField({
  label,
  type,
  name,
  value,
  onChange,
  suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === "textarea";
  const tag = isTextarea ? "textarea" : "input";

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormContainer>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormContainer>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
