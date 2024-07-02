import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>
          <Image src="/img/logo.png" alt="Obsidiaan Studio" width={350} height={95} className="mb-8" priority />
          Momenteel hameren en beitelen we hard aan deze nieuwe website dus kom snel nog eens terug.
        </p>
      </main>
    </>
  );
}
