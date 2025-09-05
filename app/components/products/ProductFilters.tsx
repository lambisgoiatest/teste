"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface ProductFiltersProps {
  categories: string[];
  brands: string[];
  perPageOptions: number[];
}

export default function ProductFilters({
  categories,
  brands,
  perPageOptions,
}: ProductFiltersProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const defaultLimit = perPageOptions[0] || 10;

  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set(filterType, value);
    } else {
      params.delete(filterType);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const selectStyles =
    "appearance-none w-full sm:w-auto bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-sm shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const selectWrapperStyles = "relative w-full sm:w-auto";
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
      <div className={selectWrapperStyles}>
        <select
          onChange={(e) => handleFilterChange("category", e.target.value)}
          defaultValue={searchParams.get("category")?.toString() || ""}
          className={selectStyles}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {selectIcon}
      </div>

      <div className={selectWrapperStyles}>
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

      <div className={selectWrapperStyles}>
        <select
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          defaultValue={searchParams.get("sort")?.toString() || ""}
          className={selectStyles}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
        {selectIcon}
      </div>

      <div className={selectWrapperStyles}>
        <select
          onChange={(e) => handleFilterChange("limit", e.target.value)}
          defaultValue={searchParams.get("limit")?.toString() || defaultLimit}
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
