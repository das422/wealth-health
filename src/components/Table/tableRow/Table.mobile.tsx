import type { Employee } from "../../../types/types";

export function TableMobile({ entriesToShow }: { entriesToShow: Employee[] }) {
  return (
    <div className="flex flex-col gap-6">
      {entriesToShow.map((entry, index) => (
        <div
          key={index}
          className="border border-dark rounded-lg overflow-hidden hover:border-secondary transition-colors"
        >
          {Object.entries(entry).map(([key, value], i) => (
            <div
              key={i}
              className="flex hover:bg-gray-50 transition-colors"
            >
              <div className="w-1/2 p-4 bg-secondary text-white capitalize text-[1.6rem] font-medium">
                {key}
              </div>
              <div className="w-1/2 p-4 text-[1.6rem] border-l border-dark/20">
                {value}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

