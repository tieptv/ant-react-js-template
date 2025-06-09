import { Radio } from "antd";

const CustomRadioGroup = ({
  className = "",
  options,
  onChange,
  defaultValue = null,
  value = null,
  disabled,
}) => {
  return (
    <Radio.Group
      disabled={disabled}
      className={`${className}`}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      
    >
      {options.map((item, index) => (
        <Radio key={index} value={item.value}>{item.label}</Radio>
      ))}
    </Radio.Group>
  );
};

export default CustomRadioGroup;
