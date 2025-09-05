"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `/collections?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-4 py-2 border rounded ${
          currentPage <= 1
            ? "pointer-events-none text-gray-400"
            : "hover:bg-gray-100"
        }`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </Link>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-4 py-2 border rounded ${
          currentPage >= totalPages
            ? "pointer-events-none text-gray-400"
            : "hover:bg-gray-100"
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </Link>
    </div>
  );
}
