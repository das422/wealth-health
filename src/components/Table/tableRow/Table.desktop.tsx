import { Employee } from "../../../types/types";

export const TableDesktop = ({ entriesToShow }: { entriesToShow: Employee[] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid">
          <div className="flex flex-row justify-between">
            {Object.keys(entriesToShow[0]).map((key, index) => (
              <div
                className={`flex-1 bg-secondary text-white text-[clamp(1.4rem,1.5vw,1.8rem)] p-4 capitalize ${
                  index !== Object.keys(entriesToShow[0]).length - 1
                    ? "border-r border-white"
                    : ""
                }`}
                key={key}
              >
                {key}
              </div>
            ))}
          </div>
          {entriesToShow.map((entry, rowIndex) => (
            <div
              className="flex-1 flex flex-wrap border-t border-dark"
              key={rowIndex}
            >
              {Object.values(entry).map((value, cellIndex) => (
                <div
                  className={`flex-1 flex flex-row items-center p-4 text-[clamp(1.4rem,1.5vw,1.8rem)] ${
                    cellIndex !== Object.values(entry).length - 1
                      ? "border-r border-dark"
                      : ""
                  }`}
                  key={cellIndex}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
