import { signIn } from "next-auth/react";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => signIn('github')}
        type="button"
        className="bg-slate-800 my-4 text-white p-3 rounded-lg"
      >
        Sign in with Github
      </button>
    </div>
  );
}
