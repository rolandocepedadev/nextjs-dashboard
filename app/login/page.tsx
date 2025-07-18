"use client";
import LoginForm from "@/app/ui/login/login-form";
import SignUpForm from "@/app/ui/signup/signup-form";
import { Suspense } from "react";
import React, { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 font-sans">
      <div className="w-full max-w-sm space-y-10 py-12">
        {/* Header */}
        <div className="text-center">
          <div
            className="inline-block rounded-full px-4 py-1 text-sm tracking-wide
            font-medium
            border
            border-black
            text-black
            bg-white"
          >
            {mode === "login" ? "Invoicia, Ltda." : "New here?"}
          </div>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            {mode === "login"
              ? "Login to your dashboard"
              : "Create your free account"}
          </p>
        </div>

        {/* Form */}
        <Suspense>{mode === "login" ? <LoginForm /> : <SignUpForm />}</Suspense>

        {/* Toggle */}
        <p className="text-xs text-center text-gray-500 mt-4">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="underline hover:text-black"
              >
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="underline hover:text-black"
              >
                Log in here
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}
