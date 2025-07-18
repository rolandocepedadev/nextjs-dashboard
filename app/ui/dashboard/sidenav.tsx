import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
export default function SideNav() {
  return (
    <aside className="flex h-full flex-col px-4 py-6 border-r border-gray-700 bg-primary text-white">
      <Link
        href="/"
        className="mb-6 text-lg font-semibold tracking-tight text-secondary"
      >
        Invoicia
      </Link>

      <nav className="flex flex-col space-y-2 flex-1">
        <NavLinks />
      </nav>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
        className="mt-6"
      >
        <button className="flex items-center gap-2 text-sm font-medium text-gris hover:text-white transition">
          <PowerIcon className="w-5" />
          <span className="hidden md:inline">Sign out</span>
        </button>
      </form>
    </aside>
  );
}
