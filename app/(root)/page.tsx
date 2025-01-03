import Hello from "@/app/components/hello";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Next.js",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
