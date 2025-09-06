"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

interface ProductFiltersProps {
  categories: string[];
  brands: string[];
  perPageOptions: number[];
}

// Helper to capitalize letters
const capitalizeWords = (s: string) =>
  s.replace(/\b\w/g, (char) => char.toUpperCase());

export default function ProductFilters({
  categories,
  brands,
  perPageOptions,
}: ProductFiltersProps) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  const limit = perPageOptions[0] || 10;

  // Called whenever the filter dropdown changes
  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    // Always go back to page 1
    params.set("page", "1");
    if (value) {
      // If a value is selected, set it in the URL
      params.set(filterType, value);
    } else {
      // If "All" option (empty value), remove the filter from the URL
      params.delete(filterType);
    }

    replace(`${path}?${params.toString()}`);
  };

  // Reusable styles
  const selectStyles =
    "appearance-none w-full sm:w-auto bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-sm shadow-sm transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500";
  const selectWrapper = "relative w-full sm:w-auto";
  const selectIcon = (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
      {/* Category */}
      <div className={selectWrapper}>
        <select
          onChange={(e) => handleFilterChange("category", e.target.value)}
          defaultValue={searchParams.get("category")?.toString() || ""}
          className={selectStyles}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {capitalizeWords(c)}
            </option>
          ))}
        </select>
        {selectIcon}
      </div>

      {/* Brand */}
      <div className={selectWrapper}>
        <select
          onChange={(e) => handleFilterChange("brand", e.target.value)}
          defaultValue={searchParams.get("brand")?.toString() || ""}
          className={selectStyles}
        >
          <option value="">All Brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {selectIcon}
      </div>

      {/* Sort By */}
      <div className={selectWrapper}>
        <select
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          defaultValue={searchParams.get("sort")?.toString() || ""}
          className={selectStyles}
        >
          <option value="">Sort By</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {selectIcon}
      </div>

      {/* Per Page */}
      <div className={selectWrapper}>
        <select
          onChange={(e) => handleFilterChange("limit", e.target.value)}
          defaultValue={searchParams.get("limit")?.toString() || limit}
          className={selectStyles}
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} per page
            </option>
          ))}
        </select>
        {selectIcon}
      </div>
    </div>
  );
}
