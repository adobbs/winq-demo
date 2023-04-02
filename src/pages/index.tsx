import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Winq</title>
        <meta name="description" content="An AI assistant that helps you get a job." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0d0d1b] to-[#04050b]">
        <div className="container flex flex-col items-center justify-center gap-16 px-4 py-16 ">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Winq
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-semibold text-white">An AI assistant that helps you get a job.</div>
              <div className="text-xl font-light text-gray-200">(Instead of replacing yours.)</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/demo"
            >
              <h3 className="text-2xl font-bold">App Demo →</h3>
              <div className="text-lg">
                Try out the demo experience (scripted chat and mock data).
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/adobbs/winq-demo"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Source Code →</h3>
              <div className="text-lg">
                View the source code for this prototype on GitHub.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
