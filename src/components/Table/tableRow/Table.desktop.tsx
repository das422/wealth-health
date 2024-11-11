import { Employee } from "../../../types/types";

export const TableDesktop = ({ entriesToShow }: { entriesToShow: Employee[] }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-dark">
      <div className="min-w-[800px]">
        <div className="overflow-hidden">
          <div className="flex flex-row bg-secondary">
            {Object.keys(entriesToShow[0]).map((key, index) => (
              <div
                className={`flex-1 text-white text-[1.6rem] p-4 capitalize font-medium ${
                  index !== Object.keys(entriesToShow[0]).length - 1
                    ? "border-r border-white/20"
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
              className={`flex flex-row hover:bg-gray-50 transition-colors ${
                rowIndex !== entriesToShow.length - 1 ? "border-b border-dark/20" : ""
              }`}
              key={rowIndex}
            >
              {Object.values(entry).map((value, cellIndex) => (
                <div
                  className={`flex-1 p-4 text-[1.6rem] ${
                    cellIndex !== Object.values(entry).length - 1
                      ? "border-r border-dark/20"
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
