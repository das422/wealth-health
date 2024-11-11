import type { SelectEntriesProps } from "../../types/types";

export function SelectEntries({ updateEntries }: SelectEntriesProps) {
  return (
    <label htmlFor="entries" className="flex items-center gap-4 text-[1.6rem]">
      <span>Show</span>
      <select
        onChange={updateEntries}
        className="h-12 px-4 border border-dark rounded-lg text-[1.6rem] bg-white hover:border-secondary focus:border-secondary focus:outline-none transition-colors"
      >
        <option value="2">2</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
      </select>
      <span>entries</span>
    </label>
  );
}
