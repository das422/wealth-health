import { Search as SearchIcon } from "lucide-react";
import { useEmployeeStore } from "../../store/employee.store";
import type { SearchProps } from "../../types/types";

export const Search = ({ setSearch }: SearchProps) => {
  const employees = useEmployeeStore((s) => s.employees);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    const filteredEmployees = employees.filter((employee) =>
      Object.values(employee).some((value) => {
        const stringValue = String(value).toLowerCase();
        return stringValue.includes(search);
      })
    );
    setSearch(filteredEmployees);
  };

  return (
    <div className="relative">
      <input
        className="w-full h-12 pl-12 pr-4 text-[1.6rem] border border-dark rounded-lg hover:border-secondary focus:border-secondary focus:outline-none transition-colors"
        type="text"
        onChange={(e) => handleSearch(e)}
        placeholder="Search..."
        aria-label="Search employees"
      />
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};
