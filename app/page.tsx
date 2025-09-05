import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Fun Ecommerce Company
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We sell things, take a look at our{" "}
              <Link
                href="/collections"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Products
              </Link>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/collections"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Our Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
