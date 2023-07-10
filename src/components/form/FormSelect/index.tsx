import React from "react";
import { SelectElement, SelectElementProps } from "react-hook-form-mui";

import { IconClose } from "icons";

interface IFormSelectProps extends SelectElementProps<any> {
  isCleanable?: boolean;
  onChangeItem?: () => void;
}

const FormSelect: React.FC<IFormSelectProps> = ({
  control,
  name,
  options,
  label,
  required,
  disabled,
  isCleanable = false,
  onChangeItem,
  ...restProps
}) => {
  const showErrorMessage = () => "";
  const handleClearFieldValue = () => {
    control?.unregister(name, { keepDefaultValue: true });
  };

  return (
    <SelectElement
      fullWidth
      defaultValue={{}}
      control={control}
      required={required}
      label={label}
      disabled={disabled}
      name={name}
      options={options}
      parseError={showErrorMessage}
      InputProps={{
        onChange: (e) => {
          onChangeItem?.();
          return control?.register(name).onChange(e);
        },
        endAdornment:
          isCleanable && !disabled ? (
            <IconClose
              fill={"#000"}
              className="iconCleanableField"
              onClick={handleClearFieldValue}
            />
          ) : (
            <></>
          ),
      }}
      {...restProps}
    />
  );
};

export default React.memo(FormSelect);
