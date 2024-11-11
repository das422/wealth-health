import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { EmployeeState } from "../types/types";

export const useEmployeeStore = create(
  persist<EmployeeState>(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({ employees: [...state.employees, employee] })),
    }),
    {
      name: "employee-storage",
    }
  )
);