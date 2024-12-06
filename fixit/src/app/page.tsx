import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl max-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Washington&apos;s Computers <br />Repair Shop</h1>
          <address>
            Kamakwa, Nyeri.
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="tel:254713440774" className="hover:underline">
          0713-440-774
          </Link>
        </div>

      </main>
    </div>
  );
}
