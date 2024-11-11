import Dropdown from "./Dropdown";

import { Save } from "lucide-react";
import { useState } from "react";
import ListDepartment from "../data/department.list";
import ListState from "../data/state.list";

export default function Form() {
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  return (
    <form className="flex flex-col w-full max-w-7xl gap-16 px-4 py-8 mx-auto">
      <fieldset className="flex flex-col w-full p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">
          Personal Information
        </legend>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="firstname" className="text-xl">
              First name *
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="lastname" className="text-xl">
              Last name *
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="dateBirth" className="text-xl">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dateBirth"
              name="dateBirth"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="startDate" className="text-xl">
              Start Date *
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="flex flex-col w-full p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">Address</legend>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="street" className="text-xl">
              Street *
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="city" className="text-xl">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <label aria-label="Select state" className="text-xl">
              State *
            </label>
            <Dropdown
              data={ListState}
              selectedItem={state}
              setSelectedItem={setState}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="zip" className="text-xl">
              Zip code *
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              className="w-full h-12 px-4 text-lg border border-dark rounded-lg"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="w-full lg:w-1/2 flex flex-col p-8 border border-secondary rounded-lg gap-8">
        <legend className="text-2xl font-bold px-2">
          Department
        </legend>
        <Dropdown
          data={ListDepartment}
          selectedItem={department}
          setSelectedItem={setDepartment}
        />
      </fieldset>
      <div className="flex justify-center">
      <button
        type="submit"
        className="flex flex-row items-center justify-center gap-4 px-8 py-4 text-xl font-bold text-secondary bg-light rounded-lg border border-secondary hover:bg-opacity-90 transition-colors"
      >
        <Save size={24} />
        <span>Save</span>
      </button>
</div>

    </form>
  );
}
