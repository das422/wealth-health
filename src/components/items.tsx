import type { ItemsProps } from "../types/types";

const Items = ({
  listItems,
  selectedItem,
  setSelectedItem,
  setIsOpen,
}: ItemsProps) => {
  const selectItemAndClose = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  type ItemType = {
    name: string | number;
  };

  return (
    <ul className="absolute top-[3.25rem] z-10 w-full max-h-48 overflow-y-auto rounded-lg border border-dark bg-foreground md:top-[2.75rem]">
      {listItems.map(
        (item: ItemType, index: number) =>
          item.name !== selectedItem && (
            <li
              className="h-12 cursor-pointer px-4 flex items-center hover:bg-secondary hover:text-light transition-colors md:h-10"
              key={index}
              onClick={() => selectItemAndClose(String(item.name))}
            >
              {item.name}
            </li>
          )
      )}
    </ul>
  );
};

export default Items;
