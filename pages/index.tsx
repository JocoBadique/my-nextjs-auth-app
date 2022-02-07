import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const { data: loading } = useSession();
  console.log({ session, loading });

  if (!session) {
    return (
      <section className=" transition-all w-full px-6 antialiased py-16 pb-32 bg-white">
        <div className="container max-w-lg px-4 py-28 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Start Crafting Your</span>{" "}
            <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
              Next Great Idea
            </span>
          </h1>
        </div>
      </section>
    );
  } else {
    return (
      <section className=" transition-all w-full px-6 antialiased py-16  bg-white">
        <div className="container max-w-lg px-4 py-28 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Hi, Welcome</span>{" "}
            <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
              {session.user.name} !
            </span>
          </h1>
          <Link href="/secret">
            <a className="inline-flex items-center justify-center mt-6 px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              Go to secret page
            </a>
          </Link>
        </div>
      </section>
    );
  }
}
