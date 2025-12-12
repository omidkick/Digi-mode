import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface ContinueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  icon?: ReactNode;
  hideIcon?: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  children,
  isLoading = false,
  icon,
  hideIcon = false,
  className = "",
  disabled,
  ...rest
}) => {
  // Decide which icon to show
  const renderIcon = () => {
    if (hideIcon) return null;
    if (icon) return icon;
    return <ArrowLeft className="w-5 h-5" />;
  };

  return (
    <button
      className={`w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          در حال پردازش...
        </span>
      ) : (
        <>
          <span>{children}</span>
          {renderIcon()}
        </>
      )}
    </button>
  );
};

export default ContinueButton;