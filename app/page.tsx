"use client";

import {
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center px-6">
      
      {/* Navbar */}
      <div className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-xl font-bold">Cloudinary AI SaaS</h1>

        {!isSignedIn && (
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="btn btn-ghost">Sign In</button>
            </SignInButton>

            <SignUpButton>
              <button className="btn btn-primary">Sign Up</button>
            </SignUpButton>
          </div>
        )}
      </div>

      {/* Hero */}
      <div className="flex flex-1 items-center justify-center text-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Upload & Compress Videos with AI 🎥
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Reduce video size, optimize quality, and manage your uploads.
          </p>

          {!isSignedIn ? (
            <div className="flex gap-4 justify-center">
              <SignUpButton>
                <button className="btn btn-primary btn-lg">
                  Get Started 🚀
                </button>
              </SignUpButton>

              <SignInButton>
                <button className="btn btn-outline btn-lg">
                  Already have an account?
                </button>
              </SignInButton>
            </div>
          ) : (
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push("/upload")}
                className="btn btn-primary btn-lg"
              >
                Upload Video
              </button>

              <button
                onClick={() => router.push("/dashboard")}
                className="btn btn-outline btn-lg"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}