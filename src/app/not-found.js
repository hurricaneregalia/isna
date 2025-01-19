"use client";
import Link from "next/link";
import { GiGroundbreaker } from "react-icons/gi";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-base-100 px-6 py-24 sm:py-32 lg:px-8 h-screen">
      <div className="text-center flex flex-col items-center justify-center">
        <GiGroundbreaker className="text-9xl text-base-300 text-center" />
        <p className="text-base font-semibold text-indigo-600">- 404 -</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-pretty text-lg font-medium text-base-content sm:text-xl/8">Sorry, we couldnt find the page youre looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm btn btn-primary">
            Home
          </Link>
          <Link href="#" className="text-sm font-semibold btn btn-outline btn-primary">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
