import Head from "next/head";
import FacebookChat from "../components/FacebookChat";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Facebook Chat Demo</title>
        <meta name="description" content="Demo Next.js app with Facebook Messenger chat plugin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: 40, textAlign: "center" }}>
        <h1>Welcome to the Next.js Facebook Chat Demo!</h1>
        <p>This demo shows how to integrate the Facebook Messenger Customer Chat Plugin in a Next.js app.</p>
      </main>
      <FacebookChat />
    </div>
  );
}
