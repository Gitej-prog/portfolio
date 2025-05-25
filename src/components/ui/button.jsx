import React from "react";

export function Button({ children, variant = "default", asChild = false }) {
  const baseStyles = "inline-block px-4 py-2 rounded-xl text-white font-medium";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    outline: "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${className}`
    });
  }

  return <button className={className}>{children}</button>;
}
