import React, { useEffect } from "react";
import { useSession, getSession, signIn } from "next-auth/react";

const Secret = () => {
  // const [loading, setLoading] = useState(true);
  // const [content, setContent] = useState();
  const { data: session } = useSession();
  // const { data: loading } = useSession();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("api/secret");
  //     const json = await res.json();
  //     if (json.content) {
  //       setContent(json.content);
  //     }
  //   };
  //   fetchData();
  // }, [session]);

  // if (typeof window !== "undefined" && loading) return null;

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      // if (!session) {
      //   signIn();
      // } else {
      //   setLoading(false);
      // }
    };
    securePage();
  }, []);

  if (!session) {
    return (
      <section className=" transition-all w-full antialiased py-16  bg-white">
        <div className="container max-w-lg py-28 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">You aren&apost signed in,</span>
            <span className="relative mt-2 pb-16 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
              Please sign in!
            </span>
          </h1>
        </div>
      </section>
    );
  } else {
    return (
      <section className=" transition-all w-full px-6 antialiased py-16 pb-32 bg-white">
        <div className="container max-w-lg px-4 py-28 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Welcome to secret page</span>{" "}
            <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
              {session.user.name} !
            </span>
          </h1>
        </div>
      </section>
    );
  }
};

export default Secret;
