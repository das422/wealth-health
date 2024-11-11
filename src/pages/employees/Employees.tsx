import { useEmployeeStore } from "../../store/employee.store";
import DataTable from "../../components/Table/DataTable";

export default function Employees() {
  const employees = useEmployeeStore((s) => s.employees);

  return (
    <div className="flex flex-col items-center p-16 lg:p-4">
      <div className="w-full max-w-[1440px]">
        {employees.length === 0 ? (
          <p className="text-2xl">No employees found</p>
        ) : (
          <DataTable />
        )}
      </div>
    </div>
  );
}
