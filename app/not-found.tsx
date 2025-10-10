import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto bg-white">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <Image
          src="/error_image.svg"
          alt="404 Not Found"
          width={500}
          height={500}
          priority
          className="h-[500px] w-[500px] object-contain"
        />
        <h1 className="mt-8 text-2xl font-bold">Oops! Page Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist, or has been moved.
        </p>
        <p className="mt-2">Please check the URL or return to the homepage.</p>
        <Link href="/" className="mt-8">
          <button className="rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
