import type { ButtonTableProps } from "../../types/types";

export const ButtonTable = ({ updatePage, disabled, label }: ButtonTableProps) => {
  return (
    <button
      onClick={updatePage}
      className={`min-w-[40px] h-[40px] px-3 flex items-center justify-center border border-dark rounded-lg transition-colors ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "hover:bg-secondary hover:text-white"
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
