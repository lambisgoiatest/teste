import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-6">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center py-4">
          <div className="flex lg:flex-1 justify-center items-center">
            <Image
              src="/logo.png"
              alt="Fun Ecommerce Co. Logo"
              width={100}
              height={100}
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-4xl pt-6 font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Fun Ecommerce Co.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-green-50 py-16 sm:py-20 my-14">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What We Stand For
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Unmatched Quality
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Customer Happiness
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                A Touch of Happiness
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pb-12 sm:pb-18">
        <div className="container mx-auto px-6 py-16 sm:py-12 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to find something amazing?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Browse our collection of hand-picked products and find your next
            favorite thing.
          </p>
          <div className="mt-6">
            <Link
              href="/collections"
              className="inline-block rounded-md bg-green-500 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600"
            >
              Shop Now!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
