/* eslint-disable no-unused-vars */
import { Radio } from "antd";

const CustomRadioGroup = ({
  className = "",
  options,
  onChange,
  defaultValue = null,
  value = null,
  disabled,
}) => {
  // return (
  //   <Radio.Group
  //     disabled={disabled}
  //     className={`${className}`}
  //     value={value}
  //     defaultValue={defaultValue}
  //     onChange={onChange}

  //   >
  //     {options.map((item, index) => (
  //       <Radio key={index} value={item.value}>{item.label}</Radio>
  //     ))}
  //   </Radio.Group>
  // );
  return (
    // <Radio.Group options={options} defaultValue={defaultValue} />
    <Radio.Group
      // value={value}
      disabled={disabled}
      className={className}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
    />
  );
};

export default CustomRadioGroup;
