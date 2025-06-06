import { Checkbox } from "antd";

 const CustomCheckBoxGroup = ({
  options,
  value = null,
  defaultValue = null,
  disabled,
  onChange
}) => {
  return (
    <Checkbox.Group value={value} defaultValue={defaultValue} disabled={disabled} onChange={onChange} >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((item, index) => (<Checkbox key={index} value={item.value}>{item.label}</Checkbox>))}
      </div>
    </Checkbox.Group>
  );
};

export default CustomCheckBoxGroup
