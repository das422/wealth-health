import { useEmployeeStore } from "../../store/employee.store";

import DataTable from "../../components/Table/DataTable";

export default function Employees() {
  const employees = useEmployeeStore((s) => s.employees);

  return (
    <div className="flex flex-row justify-center p-15">
      {employees.length === 0 ? (
        <p className="text-2xl">No employees found</p>
      ) : (
        <DataTable />
      )}
    </div>
  );
}
