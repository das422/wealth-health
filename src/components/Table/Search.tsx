import { useEmployeeStore } from "../../store/employee.store";
import type { SearchProps } from "../../types/types";

export const Search = ({ setSearch }: SearchProps) => {
  const employees = useEmployeeStore((s) => s.employees);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    const filteredEmployees = employees.filter((employee) =>
      Object.values(employee).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearch(filteredEmployees);
  };

  return (
    <input
      className="w-full h-20 px-4 border-1 border-background rounded-lg"
      type="text"
      onChange={(e) => handleSearch(e)}
      placeholder="Search..."
      aria-label="Search employees"
    />
  );
};
