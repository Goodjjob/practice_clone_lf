import React, { InputHTMLAttributes } from "react";

interface LabeledCheckBoxProps extends InputHTMLAttributes<HTMLElement> {
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  checked: boolean;
  onChange: any;
}
export default function LabeledCheckBox(props: LabeledCheckBoxProps): JSX.Element {
  const { 
    labelClassName,
    inputClassName,
    label,
    checked,
    onChange,
  } = props;

  const handleChange = (e: any) => {
    onChange(e.currentTarget.checked)
  };

  return (
    <label className={labelClassName}>
      {label}
    <input
      className={inputClassName}
      type="checkbox"
      checked={checked}
      onChange={ (e) => handleChange(e)} />
    </label>
  );
};