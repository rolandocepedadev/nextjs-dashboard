import Link from "next/link";
import Image from "next/image";
import { turretRoad } from "@/app/ui/fonts";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9f9f0] via-[#fefeff] to-[#f0fffc] text-gray-900">
      {/* Navigation */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6">
        <div className="text-lg font-semibold tracking-tight">Invoicia</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="#">Product</Link>
          <Link href="#">Features</Link>
          <Link href="#">Marketplace</Link>
          <Link href="#">Company</Link>
        </nav>
        <Link
          href="/login"
          className="text-sm font-medium underline underline-offset-4 hover:text-secondary"
        >
          Log in →
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Simplify your{" "}
          <span className={`${turretRoad.className} text-gray-800`}>
            invoicing
          </span>{" "}
          and get paid faster
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-sm text-gray-600">
          Manage your customers, create professional invoices, and track
          payments — all in one sleek dashboard.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/login"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-primary"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:text-primary"
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* Dashboard Screenshot Placeholder */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="overflow-hidden ">
          <Image
            src="/invoicia-desktop.png" // replace with actual dashboard screenshot if you want
            alt="Dashboard preview"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 pb-10">
        © {new Date().getFullYear()} Invoicia, Ltda. All rights reserved.
      </footer>
    </main>
  );
}
