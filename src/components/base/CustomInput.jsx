import { Input } from "antd";

const CustomInput = ({
  placeholder,
  className = "",
  onChange,
  required,
  disabled,
}) => {
  return (
    <Input
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} h-[50px] w-full rounded-md`}
      required={required}
    />
  );
};

export default CustomInput;
