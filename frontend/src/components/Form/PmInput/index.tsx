import React from "react";
import { Alert, Input, InputNumber, InputProps } from "antd";
import { Control, Controller } from "react-hook-form";

const inputTypeSwitcher = ({ type, id, className, ...rest }: any) => {
  let component;
  switch (type) {
    case "normal":
      component = <Input {...rest} />;
      break;

    case "password":
      component = <Input.Password {...rest} />;
      break;
    case "number":
      component = <InputNumber {...rest} />;
      break;
    default:
      component = <Input {...rest} />;
      break;
  }
  return component;
};

type PMInputTypes = InputProps & {
  name: string;
  type?: "normal" | "phone" | "password" | "number";
  control: Control<any>;
  label?: any;
  error?: any;
  parentClass?: string;
  labelClass?: string;
  maxLength?: number;
  required?: boolean;
  inputfieldClass?: string;
  rules?: any;
  register: any;
  placeholder: string;
};

const PMInput = ({
  name,
  type = "normal",
  control,
  label,
  error,
  inputfieldClass,
  parentClass,
  labelClass,
  required = false,
  showCount,
  rules = null,
  register,
  placeholder,
  ...rest
}: PMInputTypes) => {
  return (
    <div className={parentClass}>
      {label && (
        <label className={labelClass}>
          {label}
          {required && "*"}
        </label>
      )}
      <Controller
        {...register(name)}
        name={name}
        control={control}
        render={({ field }) => inputTypeSwitcher({ ...field, type, ...rest })}
        rules={rules}
      />
      {error && (
        <div className="mt-2">
          <Alert message={error} type="error" />
        </div>
      )}
    </div>
  );
};

export default PMInput;
