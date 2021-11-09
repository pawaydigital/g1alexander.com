import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllFilesMetadata } from "@/lib/mdx";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link
          rel="apple-touch-icon"
          href="https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736"
        ></link>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center dark:bg-green-300 bg-pink-300">
        <h1 className="text-6xl font-bold">Blog next</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <a>
                <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
                <p className="mt-4 text-xl">{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            width={50}
            height={50}
            src="/vercel.svg"
            alt="Vercel Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: {
      posts,
    },
  };
}
