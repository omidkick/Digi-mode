import React from "react";
import { Loader2 } from "lucide-react";

interface FallbackProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  spinnerOnly?: boolean;
  variant?: "default" | "centered" | "fullscreen";
  withBackground?: boolean;
}

const Fallback: React.FC<FallbackProps> = ({
  message = "در حال بارگذاری اطلاعات",
  className = "",
  size = "md",
  spinnerOnly = false,
  variant = "default",
  withBackground = false,
}) => {
  // Size configuration
  const sizeConfig = {
    sm: { spinner: "h-4 w-4", text: "text-sm", gap: "gap-2" },
    md: { spinner: "h-6 w-6", text: "text-base", gap: "gap-3" },
    lg: { spinner: "h-8 w-8", text: "text-lg", gap: "gap-4" },
  };

  // Variant configuration
  const variantConfig = {
    default: "",
    centered: "min-h-[200px] w-full",
    fullscreen: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
  };

  const { spinner, text, gap } = sizeConfig[size];
  const variantClass = variantConfig[variant];
  const backgroundClass = withBackground ? "bg-muted/30 rounded-lg p-6" : "";

  return (
    <div
      className={`flex items-center justify-center ${variantClass} ${gap} ${backgroundClass} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className="relative" aria-hidden="true">
        <Loader2 className={`${spinner} animate-spin text-primary`} />
        <span className="sr-only">Loading...</span>
      </div>

      {!spinnerOnly && (
        <span
          className={`${text} font-medium text-secondary`}
          aria-hidden={spinnerOnly}
        >
          {message}
        </span>
      )}
    </div>
  );
};

export default Fallback;
