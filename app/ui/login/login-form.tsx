"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form className="space-y-5" action={formAction}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="you@acme.com"
        required
        className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
      />

      <input
        id="password"
        type="password"
        name="password"
        placeholder="••••••••"
        required
        minLength={6}
        className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
      />

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <button
        type="submit"
        aria-disabled={isPending}
        className={`w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-secondary shadow-sm transition-colors hover:scale-95 hover:bg-secondary hover:text-primary`}
      >
        → Log In
      </button>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
