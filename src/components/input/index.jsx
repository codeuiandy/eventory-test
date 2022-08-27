import React from "react";
import Wrapper from "./style";

const Input = ({
  label,
  onChange,
  disabled,
  className,
  labelClassName,
  inputClassName,
  value,
  leftIcon,
  rightIcon,
  placeholder,
  as,
  optionalLabelDiv,
  type,
  inputCont,
}) => {
  return (
    <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      <div className={`input-container ${className || ""}`}>
        {label && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={`input-label ${labelClassName || ""}`}>{label}</div>
            {optionalLabelDiv || ""}
          </div>
        )}
        {as || (
          <div className={`inputBoxWrap ${inputCont || ""}`}>
            {leftIcon}
            <input
              className={inputClassName}
              type={type}
              value={value}
              onChange={onChange}
              disabled={disabled}
              placeholder={placeholder}
            />
            {rightIcon}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Input;

export const SelectInput = ({
  options,
  placeholder,
  leftIcon,
  rightIcon,
  label,
  onChange,
  inputClassName,
  className,
  labelClassName,
  value,
  labelName,
  optionValue,
  defaultValue,
  inputWrapper,
  disabled,
  getLabel,
  getValue,
}) => {
  return (
    <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      <div className={`input-container ${className || ""}`}>
        {label && (
          <div className={`input-label ${labelClassName || ""}`}>{label}</div>
        )}
        <div className={`inputBoxWrap ${inputWrapper}`}>
          {leftIcon}
          <select
            className={inputClassName}
            onChange={(e) => {
              if (getValue) {
                return onChange(JSON.parse(e.target.value));
              }
              onChange(e.target.value);
            }}
            value={getValue ? JSON.stringify(value) : value}
            defaultValue={defaultValue}
            style={{
              textTransform: "capitalize",
            }}
            disabled={disabled}
          >
            <option value="">{placeholder}</option>
            {options?.length
              ? options.map((option) => (
                  <option
                    key={Math.random()}
                    value={
                      getValue
                        ? JSON.stringify(option)
                        : option[optionValue] || option?.id
                    }
                  >
                    {getLabel
                      ? getLabel(option)
                      : option[labelName] || option.label || option?.name}
                  </option>
                ))
              : ""}
          </select>
          {rightIcon}
        </div>
      </div>
    </Wrapper>
  );
};

export const CheckInput = ({
  label,
  labelClassName,
  inputClassName,
  checked,
  onChange,
  className,
}) => {
  return (
    <Wrapper>
      <div className={`check-wrapper ${className || ""}`}>
        <input
          type="checkbox"
          checked={checked}
          className={`check-input ${inputClassName || ""}`}
          onChange={onChange}
        />
        <div className={`check-label ${labelClassName || ""}`}>{label}</div>
      </div>
    </Wrapper>
  );
};
