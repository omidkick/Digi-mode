import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface RHFTextFieldProps<TFieldValues extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
  name: Path<TFieldValues>;
  dir?: "rtl" | "ltr" | "auto";
  register: UseFormRegister<TFieldValues>;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<TFieldValues>> | undefined;
  isRequired?: boolean;
  type?: "text" | "email" | "tel" | "password" | "number" | "textarea";
  placeholder?: string;
  rows?: number;
}

export default function RHFTextField<TFieldValues extends FieldValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired = false,
  placeholder = "",
  rows = 1,
  ...rest
}: RHFTextFieldProps<TFieldValues>) {
  const hasError = !!errors;
  const errorMessage = errors?.message as string | undefined;

  const baseClasses = `border-b border-gray-200 py-2 outline-none text-gray-800 ${
    dir === "ltr" ? "text-left" : "text-right"
  } ${hasError ? "border-red-300" : ""}`;

  return (
    <div className={`flex flex-col gap-1 text-sm`}>
      <label htmlFor={name} className="text-gray-600 font-semibold">
        {label}
        {isRequired && <span className="text-red-500 mr-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          dir={dir}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} resize-none min-h-[80px]`}
          {...register(name)}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          type={type}
          dir={dir}
          placeholder={placeholder}
          className={baseClasses}
          {...register(name)}
          {...rest}
        />
      )}

      {hasError && errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
}