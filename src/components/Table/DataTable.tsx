import { useEffect, useState } from "react";
import { useEmployeeStore } from "../../store/employee.store";
import type { Employee } from "../../types/types";
import { Pagination } from "./Pagination";
import { Search } from "./Search";
import { SelectEntries } from "./SelectEntries";
import { TableDesktop } from "./tableRow/Table.desktop";
import { TableMobile } from "./tableRow/Table.mobile";

export default function DataTable() {
   const employees = useEmployeeStore((s) => s.employees);
   const [entries, setEntries] = useState(2);
   const [currentPage, setCurrentPage] = useState(1);
   const [search, setSearch] = useState<Employee[]>();
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);
     };

     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   const start = (currentPage - 1) * entries;
   const end = start + entries;

   const entriesToShow = search
     ? search.slice(start, end)
     : employees.slice(start, end);
   const totalEntries = search ? search.length : employees.length;
   const numberOfPages = Math.ceil(totalEntries / entries);

   useEffect(() => {
     setCurrentPage(1);
   }, [search]);

   const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setEntries(parseInt(e.target.value));
     setCurrentPage(1);
   };

   const renderEntryInfo = () => {
     const endEntry = Math.min(end, totalEntries);
     return `Showing ${start + 1} to ${endEntry} of ${totalEntries} entries`;
   };

   const isDataNotFound = search && entriesToShow.length === 0;

   return (
     <div className="flex flex-col w-full gap-8">
       <div className="flex flex-row justify-between items-center lg:flex-col lg:gap-4">
         {!isDataNotFound && (
           <SelectEntries updateEntries={handleEntriesChange} />
         )}
         <div className="w-[280px] lg:w-full">
           <Search setSearch={setSearch} />
         </div>
       </div>

       {isDataNotFound ? (
         <div className="flex items-center justify-center h-40 text-3xl">
           No results found
         </div>
       ) : windowWidth >= 1024 ? (
         <TableDesktop entriesToShow={entriesToShow} />
       ) : (
         <TableMobile entriesToShow={entriesToShow} />
       )}

       {!isDataNotFound && (
         <div className="flex flex-row justify-between items-center lg:flex-col lg:gap-4">
           <div className="text-3xl">{renderEntryInfo()}</div>
           <Pagination
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
             numberOfPages={numberOfPages}
           />
         </div>
       )}
     </div>
   );
}
