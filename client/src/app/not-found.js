import Image from "next/image";
import Link from "next/link";
import notFoundIcon from "@/assets/icons/404.svg";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-white">
      <div className="mx-auto w-full max-w-60.5 text-center sm:max-w-118">
        <h1 className="mb-8 font-bold text-gray-800 text-3xl">
          ERROR
        </h1>

        <div className="relative w-full h-auto mb-10">
          <Image
            src={notFoundIcon}
            alt="404"
            width={256}
            height={256}
            className="mx-auto w-full h-auto"
          />
        </div>

        <p className="mt-10 mb-6 text-base text-gray-700 sm:text-lg">
          We can&apos;t seem to find the page you are looking for!
        </p>

        <Link
          href="/auth/login"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-800"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
