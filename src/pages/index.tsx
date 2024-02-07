import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Head>
        <title>Home | Profile Builder</title>
      </Head>
    </main>
  );
}
