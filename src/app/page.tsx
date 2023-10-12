
import SignIn from '@/components/layout/SignIn';
import Image from 'next/image';
import Link from 'next/link';

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
          <SignIn />
        </div>
      </div>
    </main>
  );
}
