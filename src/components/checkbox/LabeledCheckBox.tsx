import React, { ChangeEvent, InputHTMLAttributes } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  };

  return (
    <label className={labelClassName && labelClassName}>
      {label && label}
    <input
      className={inputClassName && inputClassName}
      type="checkbox"
      checked={checked}
      onChange={(e) => handleChange(e)}/>
    </label>
  );
};