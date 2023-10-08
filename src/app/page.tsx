'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <Image
            src={'/mylogo.svg'}
            alt={'mylogo'}
            width={200}
            height={200}
            className="animate-rotate-center"
            priority
          />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-80">
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In with Google</button>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={() => signIn('github')}
                  type="button"
                  className="bg-slate-800 my-4 text-white p-3 rounded-lg"
                >
                  Sign in with Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
