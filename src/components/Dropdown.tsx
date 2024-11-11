import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import type { DropDownProps } from "../types/types";
import Items from "./items";



const Dropdown = ({ data, selectedItem, setSelectedItem }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full relative text-lg md:text-base">
      <div
        className="flex items-center h-12 px-4 w-full cursor-pointer rounded-lg border border-dark bg-light gap-4 md:h-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem || "Select..."}
        <span className="ml-auto">
          {isOpen ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
        </span>
      </div>
      {isOpen && (
        <Items
          listItems={data}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
}

export default Dropdown