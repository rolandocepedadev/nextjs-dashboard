"use client";

import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CreateInvoice } from "../invoices/buttons";
export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-6 border-b border-gray-200 bg-white">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-primary" />
        <input
          type="text"
          placeholder="Search invoices, customers..."
          className="peer w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Right-side nav */}
      <div className="ml-6 flex items-center space-x-6 text-sm">
        <Link href="#" className="text-gray-600 hover:text-black">
          Documentation
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Support
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Account
        </Link>
        <CreateInvoice />
      </div>
    </div>
  );
}
