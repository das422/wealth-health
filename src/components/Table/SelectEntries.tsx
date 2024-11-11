import type { SelectEntriesProps } from "../../types/types";

export function SelectEntries({ updateEntries }: SelectEntriesProps) {
  return (
    <label htmlFor="entries" className="flex">
      <span>Show</span>
      <select onChange={updateEntries}>
        <option value="2">2</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
      </select>
      entries
    </label>
  );
}
