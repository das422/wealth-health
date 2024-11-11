import type { Employee } from "../../../types/types";

export function TableMobile({ entriesToShow }: { entriesToShow: Employee[] }) {
  return (
    <>
      {entriesToShow.map((entry, index) => (
        <div key={index} className="w-full">
          {Object.entries(entry).map(([key, value]) => (
            <div key={key} className="flex flex-wrap">
              <div className="w-1/2 flex items-center p-4 bg-secondary text-white capitalize border-b border-white text-[clamp(1.8rem,2vw,2rem)]">
                {key}
              </div>
              <div className="w-1/2 flex items-center p-4 text-[clamp(1.6rem,2vw,2rem)] border-b border-dark last:border-b-0">
                {value}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

