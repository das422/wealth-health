import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PagingProps } from "../../types/types";
import { ButtonTable } from "./ButtonTable";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
}: PagingProps) => {
  const pagesAround = 2;
  const startPage = Math.max(1, currentPage - pagesAround);
  const endPage = Math.min(numberOfPages, currentPage + pagesAround);

  const windowWidth = window.innerWidth;

  return (
    <div className="paging">
      {windowWidth > 768 && (
        <>
          <ButtonTable
            updatePage={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            label="First"
          />

          <ButtonTable
            updatePage={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            label={<ArrowLeft />}
          />
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
        const pageIndex = startPage + index;
        return (
          <ButtonTable
            key={pageIndex}
            updatePage={() => setCurrentPage(pageIndex)}
            disabled={currentPage === pageIndex}
            label={`${pageIndex}`}
          />
        );
      })}

      {windowWidth > 768 && (
        <>
          <ButtonTable
            updatePage={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === numberOfPages}
            label={<ArrowRight />}
          />

          <ButtonTable
            updatePage={() => setCurrentPage(numberOfPages)}
            disabled={currentPage === numberOfPages}
            label="Last"
          />
        </>
      )}
    </div>
  );
};
