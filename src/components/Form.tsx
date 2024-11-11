import { Save } from "lucide-react";
import { useState } from "react";
import ListDepartment from "../data/department.list";
import ListState from "../data/state.list";
import { useEmployeeStore } from "../store/employee.store";
import type { Employee, FormErrors } from "../types/types";
import Dropdown from "./Dropdown";

export default function Form() {
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const addEmployee = useEmployeeStore((s) => s.addEmployee);

  const initialFormState = {
    firstname: "",
    lastname: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    zip: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {};

    const validations = [
      { field: "firstname", message: "Firstname is required" },
      { field: "lastname", message: "Lastname is required" },
      { field: "dateBirth", message: "Date of Birth is required" },
      { field: "startDate", message: "Start Date is required" },
      { field: "street", message: "Street is required" },
      { field: "city", message: "City is required" },
      { field: "zip", message: "Zip is required" },
    ];

    validations.forEach((validation) => {
      if (!formData[validation.field as keyof typeof formData]) {
        newErrors[validation.field as keyof typeof newErrors] =
          validation.message;
        isValid = false;
      }
    });

    if (!state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (!department) {
      newErrors.department = "Department is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const currentEmployee: Employee = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        dateBirth: new Date(formData.dateBirth).toLocaleDateString("fr-FR"),
        startDate: new Date(formData.startDate).toLocaleDateString("fr-FR"),
        street: formData.street,
        city: formData.city,
        state: state,
        zip: formData.zip,
        department: department,
      };

      addEmployee(currentEmployee);
      setFormData(initialFormState);
      setState("");
      setDepartment("");
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-7xl gap-16 px-4 py-8 mx-auto"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col w-full p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">Personal Information</legend>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="firstname" className="text-xl">First name *</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.firstname}
            />
            {errors.firstname && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.firstname}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="lastname" className="text-xl">Last name *</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.lastname}
            />
            {errors.lastname && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.lastname}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="dateBirth" className="text-xl">Date of Birth *</label>
            <input
              type="date"
              id="dateBirth"
              name="dateBirth"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.dateBirth}
            />
            {errors.dateBirth && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.dateBirth}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="startDate" className="text-xl">Start Date *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.startDate}
            />
            {errors.startDate && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.startDate}
              </p>
            )}
          </div>
        </div>
      </fieldset>
      <fieldset className="flex flex-col w-full p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">Address</legend>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="street" className="text-xl">Street *</label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.street}
            />
            {errors.street && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.street}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="city" className="text-xl">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.city}
            />
            {errors.city && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.city}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label aria-label="Select state" className="text-xl">State *</label>
            <Dropdown
              data={ListState}
              selectedItem={state}
              setSelectedItem={setState}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="zip" className="text-xl">Zip code *</label>
            <input
              type="number"
              id="zip"
              name="zip"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.zip}
            />
            {errors.zip && (
              <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
                {errors.zip}
              </p>
            )}
          </div>
        </div>
      </fieldset>
      <fieldset className="w-full lg:w-1/2 flex flex-col p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">Department</legend>
        <Dropdown
          data={ListDepartment}
          selectedItem={department}
          setSelectedItem={setDepartment}
        />
        {errors.department && (
          <p className="text-error font-semibold text-[clamp(1.6rem, 1.6vw, 1.6rem)]">
            {errors.department}
          </p>
        )}
      </fieldset>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex flex-row items-center justify-center gap-4 px-8 py-4 text-xl font-bold text-secondary bg-light rounded-lg border border-secondary hover:bg-opacity-90 transition-colors"
        >
          <Save size={24} />
          <span>Save</span>
        </button>
        {/* {modal component} */}
      </div>
    </form>
  );
}