import { Select } from "antd";

const CustomSelect = ({
  placeholder,
  className = "",
  options,
  onChange,
  defaultValue,
  disabled,
}) => {
  return (
    <Select
      disabled={disabled}
      placeholder={placeholder}
      style={{ height: "50px" }}
      className={`${className} w-full`}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
    />
  );
};

export default CustomSelect;
