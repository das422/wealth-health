import type { ButtonTableProps } from "../../types/types";

export const ButtonTable = ({ updatePage, disabled, label }: ButtonTableProps) => {
  return (
    <button
      onClick={updatePage}
      className={disabled ? "bg-gray-500 text-gray-800" : ""}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
